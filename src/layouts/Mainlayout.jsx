import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Mainlayout({ children }) {
  return (
    <main className="relative">
      <Navbar></Navbar>

      <div>{children}</div>

      <Footer></Footer>
    </main>
  )
}

export default Mainlayout