import React from 'react'
import Title from './Title'
import JetPackGuyImg from "@/public/imges/JetpackGuy.png"
import WeatherAppImg from "@/public/imges/WeatherApp.png"
import OldPortfolio from "@/public/imges/oldPortfolio.png"
import CurrencyConverter from "@/public/imges/currencyConverter.png"
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='wrapper'>
        <Title text='.projects' />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <ProjectCard 
            title='currency converter.'  
            link='https://giorgoszgs1.github.io/Currency-Converter/'  
            img={CurrencyConverter.src}
            paragraph='Currency Converter is project that I created with HTML,CSS and Javascript to help me with my current job. You can accurately convert any currency you need. I used the ExchangeRate-API to get the data of rates.'
        />
        <ProjectCard 
            title='weather app.'  
            link='https://giorgoszgs1.github.io/WeatherApp/'  
            img={WeatherAppImg.src}
            paragraph='Weather app is a project that I created with HTML,CSS and Javascript. You can search for every place in the world and find about the weather in that place. I used the OpenWeatherMap-API.'
        />
        <ProjectCard 
            title='jetpackGuy demo.'  
            link='https://giorgoszgs1.github.io/JetPack-Guy/'  
            img={JetPackGuyImg.src}
            paragraph='JetpackGuy is a demo project that I created with HMLT5 Canvas and Javascript. I have created a few small games in the past with unity and python and I wanted to try out the HTML5 canvas for the first time. The game is still in progress.'
        />
        <ProjectCard 
            title='old portfolio.'  
            link='https://giorgoszgs1.github.io/portfolio/'  
            img={OldPortfolio.src}
            paragraph='This is my old portfolio project that I created with HTML,CSS and Javascript to showcase my skillset.'
        />
        </div>
    </div>
  )
}

export default Projects