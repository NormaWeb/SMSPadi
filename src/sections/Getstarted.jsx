import React from 'react';
import Icon1 from '../assets/Create Account.svg';
import Icon2 from '../assets/Fund Wallet.svg';
import Icon3 from '../assets/Receive SMS.svg';


const Getstarted = () => {
    return (
        <section className="max-container max-sm:mt-0">
            <div className="text-center">
                <h1 className='text-primary text-3xl max-sm:font-semibold max-sm:text-2xl'>Getting Started is as easy as 1,2,3...</h1>
            </div>

            <div className="flex max-lg:flex-col gap-10 mt-10">

                <div className="flex flex-1 flex-col ">
                    <img src={Icon1} alt="Create an account"
                        width={80} height={80}
                        className="object-contain mb-3"
                    />
                    <h4 className='text-primary text-2xl max-sm:font-semibold max-sm:text-xl'>1. Create an account </h4>
                    <p className='mt-3 text-primary max-sm:text-sm'>  Register easily on SMSPadi with just <br /> your email, phone number, and user <br /> name. No ID information needed. </p>


                </div>

                <div className="flex flex-1 flex-col">
                    <img src={Icon2} alt="Fund your wallet"
                        width={80} height={80}
                        className="object-contain mb-3"
                    />
                    <h4 className='text-primary text-2xl mt-3 max-sm:font-semibold max-sm:text-xl'>2. Fund your wallet </h4>
                    <p className='mt-3 text-primary max-sm:text-sm'>  Add money to your wallet using the <br /> payment methods provided. You can <br />fund using a card, transfer, or USSD. </p>


                </div>

                <div className="flex flex-1 flex-col">
                    <img src={Icon3} alt="Start receiving SMS"
                        width={80} height={80}
                        className="object-contain mb-3"
                    />
                    <h4 className='text-primary text-2xl mt-3 max-sm:font-semibold max-sm:text-xl'>3. Start receiving SMS </h4>
                    <p className='mt-3 text-primary max-sm:text-sm'>  Buy a virtual number and start <br /> receiving verification SMS. It <br />
                        works instantly.
                    </p>


                </div>
            </div>

        </section>
    )
}

export default Getstarted