import React from 'react';
import Mainlayout from '../layouts/Mainlayout';
import SignUpHero from '../sections/sign up/SignUpHero';


function SignUp() {
  return (
    <Mainlayout>
      <section className='padding'>
        <SignUpHero />
      </section>
    </Mainlayout>
  )
}
export default SignUp