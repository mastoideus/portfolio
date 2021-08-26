import React, {useEffect} from 'react' 
import './Project.css' 
import Aos from 'aos'
import 'aos/dist/aos.css'


const Project=({name,framework,tools,mockup,id, src})=>{

    useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])

   const code1='{'
   const code2='}'

    return (
        <div className='project'>
            <p className='project__code1'>{code1}</p>
            <div>
              <a href={src} target='_blank' style={{color:'white'}}><div className='project__title'>
                 <h2>{name}</h2>
                 <small className='project__livecode'>See Live</small>
             </div></a>
             <img src={mockup} alt=''/>
            </div>
            <div className='project__info' data-aos='fade-right'>
            <h4 className='project__infoinfo'>Info</h4>
            <small className='project__tools'>{tools}</small>
            </div>
            <p className='project__code2'>{code2}</p>
        </div>
    )
}


export default Project