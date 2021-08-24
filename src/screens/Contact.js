import React from 'react' 
import './Contact.css' 
import ContactForm from '../components/ContactForm'

const Contact=()=>{
    return (
        <div className='contact' id='contact'>
           <h1>Contact</h1>
           <ContactForm/>
        </div>
    )
}

export default Contact 