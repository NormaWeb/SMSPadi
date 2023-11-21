import React from 'react';
import Icon1 from '../assets/telegram.png';
import Icon2 from '../assets/instagram.png';
import Icon3 from '../assets/twitter.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="px-4 lg:px-20 py-4 mt-3">
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 mt-10">
                    <a href="#" className="text-3xl font-bold mb-4 lg:mb-0 lg:mr-16">SMS<span className='text-yellow'>Padi</span> </a>

                    <div className="lg:flex-grow">
                        <div className="flex flex-col lg:flex-row lg:justify-end space-y-4 lg:space-y-0 lg:space-x-8 gap-3">
                            <img src={Icon1} alt="telegram"
                                className="object-contain w-10 h-10"
                            />

                            <img src={Icon2} alt="instagram"
                                className="object-contain w-10 h-10"
                            />

                            <img src={Icon3} alt="twitter"
                                className="object-contain w-10 h-10"
                            />

                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-white my-6" />

            <div className="flex items-center justify-between">
                <div className='px-4 lg:px-20 py-4 mt-3'>
                    <p className='text-xl mb-4 lg:mb-0 lg:mr-16'>&copy; All rights reserved. SMSPadi 2023.</p>
                </div>

                <div className='lg:flex-grow'>
                    <ul className="flex flex-col lg:flex-row lg:justify-end space-y-4 lg:space-y-0 lg:space-x-8 gap-5">
                        <li><a href="/sign in">Sign In</a></li>
                        <li><a href="/SignUp">Sign Up</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms of use">Terms of Use</a></li>
                    </ul>
                </div>

            </div>

            <hr className="border-white my-6" />

            <div className='text-center'>
                <h3 className='text-2xl mb-3'>Disclaimer</h3>

                <p className='text-slate-gray'>Phone numbers obtained from our service must not be used for any illegal purpose. <br />
                    It is forbidden to use phone numbers, including, but not limited to: for sites with a high-risk status: payment systems, banks, <br />
                    credit organizations, some bookmakers: to receive SMS from telecome operators: for public service websites. <br /> <br /> <br />
                </p>

            </div>

        </footer>
    );
};

export default Footer;
