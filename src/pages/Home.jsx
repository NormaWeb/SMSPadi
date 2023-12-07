import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Getstarted from './sections/Getstarted';
import Choose from './sections/Choose';
import Register from './sections/Register';
import Smspadi from './sections/Smspadi';
import Verify from './sections/Verify';
import FAQ from './sections/FAQ';
import Mainlayout from './layouts/Mainlayout';


const Home = () => (
  <Mainlayout>

    <section className="padding">
      <Hero />
    </section>

    <section className="padding">
      <Getstarted />
    </section>

    <section className="padding bg-light">
      <Choose />
    </section>

    <section className="padding">
      <Register />
    </section>

    <section className="padding">
      <Smspadi />
    </section>

    <section className="padding bg-yellow">
      <Verify />
    </section>

    <section className="padding">
      <FAQ />
    </section>

  </Mainlayout>
);

export default Home



