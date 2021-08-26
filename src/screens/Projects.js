import React from 'react' 
import './Projects.css' 
import bookmarketMockup from '../assets/images/mockuper.png'
import netflixMockup from '../assets/images/mockuperNetflix.png'
import covidMockup from '../assets/images/mockuperCovid.png'

import mountMockup from '../assets/images/mockuperMount.png'
import Project from '../components/Project'


const projects=[
    {id:'p1', name:'Bookmarket', framework:'React', tools:'hooks / redux / modal / routing /responsive / input validation / pagination', mockup: bookmarketMockup, src:'https://bookmarket2-app.herokuapp.com'},
    {id:'p2',name:'Netflix-clone', framework:'React', tools:'useContext / useReducer / fetching / useState / responsive', mockup: netflixMockup, src:'https://netflix-startingpage-app.herokuapp.com'},
    {id:'p3',name:'Covid19-Tracker', framework:'React',tools:'fetch API / hooks / react-leaflet / material-ui / responsive', mockup: covidMockup, src:'https://covid19-tracker88.herokuapp.com'},
    {id:'p4', name:'Mount-Spiders',framework:'React', tools:'hooks / react-scroll / state control / aos / responsive', mockup:mountMockup, src:'https://mount-spiders-app.herokuapp.com'}
]


const Projects=()=>{
    
    const code1='['
    const code2=']'
    
    return (
        <div className='projects' id='projects'>
           <h1><span>const </span>Projects<span className='mobile__jednako'> =</span></h1>
            <div className='projects__list'>
         
            {projects.map(project=>{
               return <Project name={project.name} src={project.src} tools={project.tools}  mockup={project.mockup} key={project.id} />
           })}
          
           </div>
        </div>
    )
}

export default Projects 