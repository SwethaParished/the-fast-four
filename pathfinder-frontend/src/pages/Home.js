import React from 'react';
import '../App.css';
import Cards from '../HomePage/Cards';
import HeroSection from '../HomePage/HeroSection';
import Footer from '../HomePage/Footer';
function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
  {/*<div>Home</div>*/ }

}

export default Home;