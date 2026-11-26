'use client';
import { motion, useReducedMotion } from 'framer-motion';
export function Reveal({children,className='',delay=0}:{children:React.ReactNode;className?:string;delay?:number}){const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:0,y:24,filter:'blur(6px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} viewport={{once:true,margin:'-70px'}} transition={{duration:reduced?0:.7,delay,ease:[.2,.7,.2,1]}}>{children}</motion.div>}
