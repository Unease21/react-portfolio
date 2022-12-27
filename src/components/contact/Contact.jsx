import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Mail</h4>
            <h5>anisheyyy@gmail.com</h5>
            <a href="mailto:anisheyyy@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Anish Shrestha</h5>
            <a href="https://m.me/youngborn21" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>97798123465789</h5>
            <a href="https://api.whatsapp.com/send?phone=+1234567898" target="_blank">Send a message</a>
          </article>
        </div>

        {/* End of contact options */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default contact
