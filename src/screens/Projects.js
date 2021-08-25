import React from 'react' 
import './Projects.css' 
import bookmarketMockup from '../assets/images/mockuper.png'
import netflixMockup from '../assets/images/mockuperNetflix.png'
import covidMockup from '../assets/images/mockuperCovid.png'
import hotelMockup from '../assets/images/mockuperHotel.png'
import Project from '../components/Project'


const projects=[
    {id:'p1', name:'Bookmarket', framework:'React', tools:'hooks / redux / modal / routing /responsive / input validation / pagination', mockup: bookmarketMockup},
    {id:'p2',name:'Netflix-clone', framework:'React', tools:'useContext / useReducer / fetching / useState / responsive', mockup: netflixMockup},
    {id:'p3',name:'Covid19-Tracker', framework:'React',tools:'fetch API / hooks / material-ui / responsive', mockup: covidMockup},
    {id:'p4', name:'Black Swan Hotel',framework:'React', tools:'hooks / class-components / state control / responsive', mockup:hotelMockup}
]


const Projects=()=>{
    
    const code1='['
    const code2=']'
    
    return (
        <div className='projects' id='projects'>
           <h1><span>const </span>Projects<span className='mobile__jednako'> =</span></h1>
            <div className='projects__list'>
         
            {projects.map(project=>{
               return <Project name={project.name} tools={project.tools} framework={project.framework} mockup={project.mockup} key={project.id} />
           })}
          
           </div>
        </div>
    )
}

export default Projects 