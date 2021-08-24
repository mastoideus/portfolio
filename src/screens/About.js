import React from 'react' 
import './About.css'
 
const aboutData=[
    {key:'firstName', value:'Anel'},
    {key:'lastName', value:'Zubčević'},
    {key:'country', value:'BiH'},
    {key:'city', value:'Sarajevo'},
    {key:'age', value:33},
    {key:'experience', value:'2+ years'}
]

const About=()=>{
    
    
    const objectNot1='{'
    const objectNot2='}'
    const method='code:()=>{ setCodingTo24Hours(true) }'

    const aboutList=aboutData.map(data=>{
        return  <li><span>{data.key}:</span> {data.value}</li>
    })

    return (
        <div className='about' id='about'>
           <h1><span className='about__object'>const</span> About<span className='about__object'> = </span></h1>
          
               <span>{objectNot1}</span>
               {aboutList}
               <li><span>{method}</span></li>
               <span>{objectNot2}</span>
         
        </div>
    )
}

export default About 