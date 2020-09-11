import React from 'react'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Title from './components/Title.js'
import Skill from './components/Skill.js'
import { skills } from './config'

const LandingPage = () => {
    return <div>
        <Navbar />
        <Header 
            title="Mon site" 
            description="Apprenez-en plus sur moi" 
            buttonText="Me contacter"
            imageUrl="https://wallpapercave.com/wp/TSlZ57J.jpg"
        />
        <div className="container">
            <Title title="Mes compétences" description="Voici ce que je sais faire" />
            {skills.map(item => {
                return <Skill skill={item} />
            })}
        </div>
            
    </div>
}

export default LandingPage