import React from 'react';
import Mainlayout from '../layouts/Mainlayout';
import ContactHero from '../sections/contact/ContactHero';
import Verify from '../sections/Verify';
import FAQ from '../sections/FAQ';


function Contact() {
  return (
    <Mainlayout>
      <section className='padding'>
        <ContactHero />
      </section>

      <section className='padding bg-yellow'>
        <Verify/>
      </section>

      <section className='padding'>
        <FAQ/>
      </section>

    </Mainlayout>
  )
}
export default Contact