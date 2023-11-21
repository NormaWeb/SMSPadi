import React from 'react';
import Button from './Button';

function Navbar() {
    return (
        <nav className=" px-4 lg:px-20 py-4 mt-3">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
                <a href="#" className="text-3xl font-bold mb-4 lg:mb-0 lg:mr-16">SMS<span className='text-yellow'>Padi</span> </a>

                <div className="lg:flex-grow">
                    <ul className="flex flex-col lg:flex-row lg:justify-end space-y-4 lg:space-y-0 lg:space-x-8 gap-5">
                        <li><a href="/" className="hover:text-yellow">Home</a></li>
                        <li><a href="/contact" className="hover:text-yellow">Contact</a></li>
                        <li><a href="/signin" className="hover:text-yellow">Sign In</a></li>
                    </ul>
                </div>
                <div className='lg:ml-auto'>
                    <div className='hover:bg-yellow font-semibold ml-2'>
                        <a href="/signup">
                        <Button label="Sign Up" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

