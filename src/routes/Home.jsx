import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Expertise from '../components/Expertise';
import Pro from '../components/Pro';
import SkillsContent from '../components/SkillsContent';


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Expertise/>
      <Pro/>
      <SkillsContent/>
      <a href="https://drive.google.com/uc?export=download&id=1c3PXhe7ruqzV-Z_Z7ccysuI779XUteuF" className="btn">Download Resume</a>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  )
}

export default Home
