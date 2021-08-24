import React, {useEffect, useState} from 'react'
import Top from './screens/Top'
import Skills from './screens/Skills'
import About from './screens/About' 
import Contact from './screens/Contact'
import Projects from './screens/Projects'





function App() {
   const[scrollIcon, setScrollIcon]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 600){
         setScrollIcon(true)
      } else {
        setScrollIcon(false)
      }
    })
    
  },[])



  return (
    <React.Fragment>
     <Top showIcon={scrollIcon}/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </React.Fragment>
  );
}

export default App;
