import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "salmanshaikh.space",
      message: message
    }

    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams,import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
          setName("")
          setEmail("")
          setMessage("")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='flex flex-col justify-center items-center gap-4' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} className='bg-slate-800 p-2' type="text" name="user_name" />
      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-slate-800 p-2' type="email" name="user_email" />
      <label>Message</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='bg-slate-800 p-2' name="message" />
      <input className='bg-purple-900 p-2 rounded-lg text-lg cursor-pointer' type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;