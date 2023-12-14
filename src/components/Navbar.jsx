import hamburger from '../assets/hamburger.svg';
import Button from './Button';
import { navLinks } from '../constants/Index.js';
import { useState } from 'react';

const Nav = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    function toggleMenu() {
        setMobileMenu(prevMobileMenu => !prevMobileMenu);
    }

    function hideMenu() {
        setMobileMenu(false);
    }

    return (
        <header className="top-0 z-10">
            <div className="container mx-auto px-4 lg:px-20 py-4">
                <div className={`flex items-center justify-between ${mobileMenu ? 'flex-col items-start' : 'items-start'}`}>
                    <div className="container flex mx-auto gap-20 space-x-10 items-center lg:flex-row">
                        <a href="#" className="text-3xl font-bold mb-4 lg:mb-0 lg:mr-16">
                            SMS<span className='text-yellow'>Padi</span>
                        </a>

                        <div className={!mobileMenu ? 'lg:hidden' : 'hidden'}>
                            <button onClick={toggleMenu} id='hamburger-button'>
                                <img
                                    src={hamburger}
                                    alt="Hamburger"
                                    width={25}
                                    height={25}
                                />
                            </button>
                        </div>
                    </div>

                    {mobileMenu && (
                        <button onClick={hideMenu} className="text-8xl px-6 text-black self-start">
                            &times;
                        </button>
                    )}

                    <nav className={`lg:flex lg:flex-grow lg:items-start ${mobileMenu ? 'flex flex-col items-start' : 'hidden'}`}>
                        <ul className="flex flex-col lg:flex-row lg:justify-end space-y-4 lg:space-y-0 lg:space-x-8 gap-10">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="font-montserrat leading-normal text-lg" onClick={hideMenu}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <div className='hover:bg-yellow font-semibold'>
                                <a href="/signup">
                                    <Button label="SignUp" />
                                </a>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Nav;
