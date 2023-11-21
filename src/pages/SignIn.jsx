import React from 'react';
import Mainlayout from '../layouts/Mainlayout';
import SignInHero from '../sections/sign in/SignInHero';


function SignIn() {
  return (
    <Mainlayout>
      <section className='padding'>
        <SignInHero />
      </section>
    </Mainlayout>
  )
}
export default SignIn