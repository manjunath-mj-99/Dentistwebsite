'use client';
import {useEffect,useRef,useState} from 'react';
import {useReducedMotion} from 'framer-motion';

export function CountUp({value,suffix='+'}:{value:number;suffix?:string}){
  const ref=useRef<HTMLSpanElement>(null);
  const [shown,setShown]=useState(value>0?1:0);
  const reduced=useReducedMotion();
  useEffect(()=>{
    const node=ref.current;
    if(!node)return;
    let frame=0;
    let started=false;
    const run=()=>{
      const start=performance.now();
      const duration=1250;
      const tick=(now:number)=>{
        const progress=Math.min((now-start)/duration,1);
        const eased=1-Math.pow(1-progress,3);
        setShown(progress<1?Math.max(1,Math.round(value*eased)):value);
        if(progress<1)frame=requestAnimationFrame(tick);
      };
      frame=requestAnimationFrame(tick);
    };
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting&&!started){started=true;if(reduced)setShown(value);else run();observer.disconnect();}
    },{threshold:.45});
    observer.observe(node);
    return()=>{observer.disconnect();cancelAnimationFrame(frame)};
  },[reduced,value]);
  return <span ref={ref} aria-label={`${value}${suffix}`}>{shown.toLocaleString()}{suffix}</span>;
}
