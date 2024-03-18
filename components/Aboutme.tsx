import React from 'react'
import Title from './Title'
import Skills from './Skills'

const Aboutme = () => {
  return (
    <div className="wrapper text-center flex flex-col md:flex-row  gap-10">
      <div className='w-1/2 ' id='aboutme'>
        <Title text="about me." />
        <div className='text-mg tracking-wide flex flex-col gap-6'>
          <p className=' md:text-xl pb-3 pr-3 tracking-wider '>
            Hey, I'm Giorgos Zagaris. I'm a Software Engineer based in Athens,Greece. I have a degree in <span>Game Design & Web Development</span> and 3 years of professional experience building, designing and testing Web Applications.Hey, I'm Giorgos Zagaris. I'm a Software Engineer based in Athens,Greece. I have a degree in <span>Game Design & Web Development</span> and 3 years of professional experience building, designing and testing Web Applications.
          </p>
        </div>
      </div>
      <div className='w-1/2' id="skills">
        <Skills />
      </div>
    </div>
      
    
  )
}

export default Aboutme