import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y22g875', 'template_ay81msa', form.current, 'EdvPCP-ZbMNwLoqDA')
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>tolulopeogunnusi@gmail.com</h5>
            <a href="mailto:tolulopeogunnusi@gmail.com" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+2347082030643</h5>
            <a href="https//api.whatsapp.com/send?phone+2347082030643" target="_blank">Send A Message</a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail} method="POST">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
