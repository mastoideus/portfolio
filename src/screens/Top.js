import React, {useEffect} from 'react' 
import './Top.css'
import {Link} from 'react-scroll' 
import {FiArrowUpCircle  } from "react-icons/fi"
import {animateScroll as scroll} from 'react-scroll'
import {FaGithub} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Top=({showIcon})=>{
     useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])

    
    const iconClasses= showIcon ? 'top__arrowIcon show':'top__arrowIcon'

    const titlestr1= "<h1 class='portfolio__title'>"
    const titlestr2= '</h1>'

    const liststr1='<ul>'
    const liststr2='</ul>'
    
    return (
        <div className='top'>
            <a className='top__git' target='_blank' rel='noreferrer' href='https://github.com/mastoideus/'><FaGithub className='top__gitIcon' style={{fontSize:'38px'}}/></a>
           
           <img data-aos='fade-right' className='fly' width='40px' src='https://b.kisscc0.com/20180813/woe/kisscc0-insect-housefly-black-and-white-line-art-fly-lineart-5b71ab7e8aded6.8923538715341761265688.png' alt=''/>
          <h1 data-aos='fade-right' className='top__title'><span className='top__code'>{titlestr1} </span><br/>Hello, I'm Anel <br/> Frontend Developer<span className='top__code'> {titlestr2}</span></h1>
          
          <ul data-aos='fade-left' className='top__sidemenu'>
              <p className='top__code'>{liststr1}</p>
              <li ><Link to='about' smooth={true}  duration={600}><div>About</div></Link></li>
              <li><Link to='skills' smooth={true} duration={600}><div>Skills</div></Link></li>
              <li><Link to='projects' smooth={true} duration={600}><div>Projects</div></Link></li>
              <li><Link to='contact' smooth={true} duration={600}><div>Contact</div></Link></li>
              <p className='top__code'>{liststr2}</p>
          </ul>
          <button onClick={()=>scroll.scrollToTop()} className={iconClasses}>
          <FiArrowUpCircle className='icon' />
          </button>
        </div>
    )
}


export default Top 