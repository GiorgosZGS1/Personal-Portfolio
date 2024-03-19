import React from 'react'
import Title from './Title'
import Skills from './Skills'

const Aboutme = () => {
  return (
    <div className="wrapper text-center  flex flex-col md:flex-row  gap-10">
      <div className='md:w-1/2 ' id='aboutme'>
        <Title text="&#46;about me" />
        <div className='text-mg tracking-wide flex flex-col gap-6'>
          <p className='border-none md:text-xl pb-4 pl-3 tracking-wider'>
            Hey, I'm Giorgos Zagaris. I'm a Software Engineer based in Athens,Greece. I have a degree in <span>Game Design & Web Development</span> and 3 years of professional experience building, designing and testing Web Applications. I am always looking to improve my skills and stay up-to-date with the latest best practices. I am excited to continue growing and making meaningful contributions to projects and teams.
          </p>
        </div>
      </div>
      <div className='md:w-1/2'>
        <Skills />
      </div>
    </div>
      
    
  )
}

export default Aboutme