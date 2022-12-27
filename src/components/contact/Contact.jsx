import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lqx7ewr', 'template_qvpla0l', form.current, 'mZFi2JsJUyd-zoNFE')

    e.target.reset();
      
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Mail</h4>
            <h5>anisheyyy@gmail.com</h5>
            <a href="mailto:anisheyyy@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Anish Shrestha</h5>
            <a href="https://m.me/youngborn21" target="_blank" rel='noreferrer'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>97798123465789</h5>
            <a href="https://api.whatsapp.com/send?phone=+1234567898" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>

        {/* End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
