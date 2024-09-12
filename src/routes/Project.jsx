import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Pro from '../components/Pro';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Recent Projects"/>
      <Pro/>
      <Footer/>
    </div>
  );
};

export default Project
