import React from 'react'
import './contact'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const contact = () => {
  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
   <section id='contact'>
   <h5>Get in Touch!</h5>
   <h2>Contact Me</h2>

   <div className="container contact_container">
   <div className="contact_options">
   <article className="contact_option">
   <HiOutlineMail className='contact_option-icon'/>
    <h4>Email</h4>
    <h5>dummyemail@gmail.com</h5>
    <a href="maitto:dummymail@gmail.com" target="_blank">Send a Message</a>
   </article>

   <article className="contact_option">                          
   <BsMessenger className='cont_option-icon'/>
    <h4>Messenger</h4>
    <h5>inbuilt.aman</h5>
    <a href="https://m.me/inbuilt.aman" target="_blank">Send a Message</a>
   </article>
   <article className="contact_option">                          
   <AiOutlineWhatsApp className='contact_option-icon' />
    <h4>whatsApp</h4>
    <h5>+91-9792118754</h5>
    <a href="https://api.whatsapp.com/send?phone=+91-9792118754" target="_blank">Send a Message</a>
   </article>
   </div>
  {/*End of Contact Options*/}
  <form action="">
  <input type="text" name='name' placeholder='Your Full Name' required />
  <input type="email" name='email' placeholder='Your Email' required />
  <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
  <button type="submit" className='btn btn-primary'>Send Message</button>
  </form>
  </div>
   </section>
  )
}

export default contact
