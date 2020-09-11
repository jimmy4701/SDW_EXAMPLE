import React from 'react'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'

const LandingPage = () => {
    return <div>
        <Navbar />
        <Header 
            title="Mon site" 
            description="Apprenez-en plus sur moi" 
            buttonText="Me contacter"
            imageUrl="https://wallpapercave.com/wp/TSlZ57J.jpg"
        />
            
    </div>
}

export default LandingPage