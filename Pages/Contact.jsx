import React from 'react'
import Header from '../Components/Header'
import Footer from './../Components/Footer';
import '../style/contact.css'

export default function Contact() {
  return (
   <>
     <Header />
     <div className="contact-wrapper">
          <div className="contact-section">
            <h1>Contact us</h1>
          </div>
        </div>
   
       <form >
        <div className="contact-form">
          <div className="input-group">
          <input type="text" placeholder='Name'/>
          </div>
          <div className="input-group">
          <input type="text" placeholder='Email' />
          </div>
          
         
            </div>
            <div className="contact-form">
          <div className="input-group">
          <textarea rows="5"placeholder='Your Message'>
           
           
          </textarea>
          <a href="">Submit</a>
          </div>
          </div>

       
    
        </form>
        <div className="content-right">
          <h5>Reach Us</h5>
        </div>
     <Footer />
   </>
  )
}
