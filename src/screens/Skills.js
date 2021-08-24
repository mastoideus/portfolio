import React from 'react' 
import './Skills.css' 
import htmlLogo from '../assets/images/html.png'
import cssLogo from '../assets/images/css.png'
import javascriptLogo from '../assets/images/javascript.png'
import reactIcon from '../assets/images/react.png'
import reactNative from '../assets/images/reactnative.png' 
import npmIcon from '../assets/images/npmlogo.png'
import gitIcon from '../assets/images/git.png'
import {SiReact} from 'react-icons/si'


const skillsData=[
    {key:'Html', image:htmlLogo},
    {key:'Css', image:cssLogo},
    {key:'Javascript',image:javascriptLogo},
    {key:'git', image:gitIcon},
    {key:'npm', image:npmIcon}
]


const Skills=()=>{
   

    const objectNot1='{'
    const objectNot2='}'

    const skillsList=skillsData.map(skill=>{
        return <li className='skill__row'>
        <span>{skill.key}:</span> 
        <img src={skill.image} alt=''/>
        </li>
    })
     
    return (
        <div className='skills' id='skills'>
           <h1><span className='skills__object'>const</span> Skills<span className='skills__object'> = </span></h1>
           
               <span>{objectNot1}</span>
               {skillsList}
               <li className='skill__row'>
                  <span style={{marginRight:'5px'}}>React: </span> 
                  <SiReact style={{width:'37px', height:'37px'}} />
                </li>
                 <li className='skill__row'>
                  <span style={{marginRight:'5px'}}>React Native: </span> 
                  <SiReact style={{width:'37px', height:'37px'}} />
                </li>
                <span>{objectNot2}</span>
               
          
        </div>
    )
}



export default Skills 