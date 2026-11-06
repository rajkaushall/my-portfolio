import { useState } from 'react';
import { ArrowRight, Copy, Mail } from 'lucide-react';
const email = 'rajkaushal.tech@gmail.com';
export default function ContactOptions(){
 const [open,setOpen] = useState(false);
 const [message,setMessage] = useState('');
 async function copyEmail(){
  try { await navigator.clipboard.writeText(email); setMessage('Email address copied.'); }
  catch { setMessage('Select the address above and copy it manually.'); }
 }
 return <div className="contact-options">
  <button type="button" className="button primary" aria-expanded={open} aria-controls="email-options" onClick={()=>setOpen(!open)}><Mail size={18}/> Say hello <ArrowRight size={18}/></button>
  <div id="email-options" className="email-options" hidden={!open}>
   <p className="email-options-title">Choose how to email me</p>
   <a className="button secondary" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`} target="_blank" rel="noopener noreferrer">Compose in Gmail</a>
   <a className="text-link" href={`mailto:${email}`}>Open your email app</a>
   <label htmlFor="contact-email">Email address</label>
   <input id="contact-email" value={email} readOnly onFocus={event=>event.currentTarget.select()}/>
   <button type="button" className="button secondary" onClick={copyEmail}><Copy size={15}/> Copy email address</button>
   <p className="copy-status" role="status" aria-live="polite">{message}</p>
  </div>
 </div>;
}
