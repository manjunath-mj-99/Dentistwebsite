'use client';
import Link from 'next/link';
import {useState} from 'react';
import {Logo} from './Logo';
import {site} from '@/config/site';
import {ArrowUpRight,ChevronDown,Menu,X} from './Icons';
const links=[['Services','/services'],['About','/about'],['Gallery','/gallery'],['Community','/community'],['Oral health','/blog'],['FAQ','/faq'],['Contact','/contact']];
export function Navbar(){const[open,setOpen]=useState(false);return <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation"><Logo/><div className="nav-links">{links.map(([name,url])=><Link key={url} href={url}>{name}{name==='Services'&&<ChevronDown size={13}/>}</Link>)}</div><a className="button button-small" href={site.whatsapp} target="_blank" rel="noreferrer">Book on WhatsApp <ArrowUpRight size={15}/></a><button className="mobile-menu" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>{open&&<div className="mobile-panel">{links.map(([name,url])=><Link key={url} href={url} onClick={()=>setOpen(false)}>{name}</Link>)}<a className="button" href={site.whatsapp}>Book on WhatsApp <ArrowUpRight size={16}/></a></div>}</header>}
