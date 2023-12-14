import React from 'react';
import Button from '../components/Button';
import HeroImage from '../assets/Hero Image.png';

const Hero = () => {
    return (
        <section className="bg-light min-h-screen py-20 rounded-3xl">
            <div className="text-center">
                <h1 className="text-6xl max-sm:text-2xl leading-tight font-palanquin"> Get Virtual phone numbers to <br /> receive SMS online. </h1>

                <p className="text-2xl mt-2 mb-5">SMSpadi enables you to register and verify social networks (WhatsApp, Telegram, <br /> Facebook etc.), marketplaces (Alibaba, Amazon etc.), exchanges (Binance, Paypal <br /> etc.), and online services without spam and disclosure of personal data.</p>
            </div>

            <div className='flex flex-1 items-center justify-center max-sm:flex-col gap-5 p-2'>
                <div className="flex flex-col items-center max-sm:w-full">
                    <Button label="Buy Number" fullWidth />
                </div>

                <div className="flex flex-col max-sm:w-full text-white">
                    <Button label="Rent Number"
                        fullWidth
                        backgroundColor='bg-black'
                    />
                </div>
            </div>

            <div className='flex justify-center'>
                <img
                    src={HeroImage}
                    alt="Dashboard"
                    width={800}
                    className="object-contain mt-10"
                />
            </div>

        </section>
    )
}

export default Hero;

