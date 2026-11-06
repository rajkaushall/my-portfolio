import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const sections = [['projects','Work'],['about','About'],['experience','Experience'],['certifications','Certificates']];
export default function Navbar(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[]);
 return <header className="site-header"><div className="shell nav-inner"><a href="#home" className="brand" aria-label="Kaushal Raj home"><span className="brand-mark">KR</span><span className="brand-name">Kaushal Raj</span></a><nav className="desktop-nav" aria-label="Main navigation">{sections.map(([id,label])=><a href={'#'+id} key={id}>{label}</a>)}</nav><a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={17}/></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open?'Close menu':'Open menu'}>{open?<X/>:<Menu/>}</button></div><nav id="mobile-nav" className="mobile-nav" hidden={!open} aria-label="Mobile navigation">{sections.map(([id,label])=><a href={'#'+id} key={id} onClick={()=>setOpen(false)}>{label}</a>)}</nav></header>
}
