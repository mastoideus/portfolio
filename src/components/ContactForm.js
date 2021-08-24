import React,{useEffect} from 'react' 
import './ContactForm.css' 
import {MdSmartphone, MdEmail, MdLocationOn} from 'react-icons/md'
import emailjs from 'emailjs-com'
import Aos from 'aos'
import 'aos/dist/aos.css'




const ContactForm=(props)=>{
    
    
    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_frzhzrg', 'template_7lg0dv8', e.target, 'user_7RNALJS5u5ERrMWTiSoun')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
    }

      useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])

    
   
    


    return (
        <div className='form' data-aos='fade-up'>
            <div className='form__left'>
                <h2>Contact Information</h2>
                <div className='infos'>
                  <MdSmartphone/>
                  <p>062 393-057</p>
                </div>
                <div className='infos'>
                   <MdEmail/>
                   <p>anelzubcevic@gmail.com</p>
                </div>
                <div className='infos'>
                   <MdLocationOn/>
                   <p>Sarajevo 71000 <br/>Bosnia and Herzegovina</p>
                </div>
            </div>
            <div className='form__right'>
               <form className='theform' onSubmit={sendEmail}>
                  <label>Name</label>
                  <input  id='name' type='text' name='name'/>
                  <label>Email</label>
                  <input  id='email' type='email' name='email'/>
                  <label>Subject</label>
                  <input name='subject'  style={{color:'black'}}/>
                  <label>Message</label>
                  <textarea id='message' name='message'></textarea>
                  <button type='submit'>Send Message</button>
               </form>
            </div>
        </div>
    )
}


export default ContactForm 