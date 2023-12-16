import React from 'react';
import Icon1 from '../../assets/telegram.png';
import Icon2 from '../../assets/instagram.png';
import Icon3 from '../../assets/twitter.png';


const ContactHero = () => {
  return (
    <section className="bg-yellow rounded-3xl min-h-screen py-10 md:py-20">
      <h1 className="text-4xl md:text-6xl mb-4 text-center leading-tight max-sm:font-semibold max-sm:text-2xl font-semibold">Get in touch for queries, <br />assistance and more.</h1>
      <p className='text-lg md:text-2xl text-center max-sm:text-sm'>Go to any of our social media pages and get in touch with our support <br /> team. They are 24/7 ready to help you.</p>

      <div className="py-10 md:py-20 px-4 sm:px-8 lg:px-16 xl:px-20 justify-around items-stretch flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 max-w-md mx-auto">

          {/* Card 1 */}
          <div className="bg-white flex flex-col justify-between items-center max-lg:flex-col gap-5 rounded-3xl shadow-md p-6 mb-5 mt-5">

            <div className='items-center'>
              <img src={Icon1} alt="telegram" className="object-contain w-16 h-16 md:w-20 md:h-20 mb-2" />

              <div className="">
                <h2 className="text-lg md:text-xl font-bold mt-5 max-sm:font-semibold max-sm:text-xl">Telegram Channel</h2>
                <p className="text-sm md:text-base mt-5 mb-5 max-sm:text-sm">Get updates and news on our channel.</p>
                <a href="" className="text-yellow underline font-bold">Join Now</a>
              </div>
            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-white flex flex-col justify-between items-center max-lg:flex-col gap-5 rounded-3xl shadow-md p-6 mb-5 mt-5">

            <div className='items-center'>
              <img src={Icon2} alt="Instagram" className="object-contain w-16 h-16 md:w-20 md:h-20 mb-2" />

              <div className="">
                <h2 className="text-lg md:text-xl font-bold mt-5 max-sm:font-semibold max-sm:text-xl">Instagram</h2>
                <p className="text-sm md:text-base mt-5 mb-5 max-sm:text-sm">Chat with support via our Instagram handle.</p>
                <a href="" className="text-yellow underline font-bold">Chat Now</a>
              </div>
            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-white flex flex-col justify-between items-center max-lg:flex-col gap-5 rounded-3xl shadow-md p-6 mb-5 mt-5">

            <div className='items-center'>
              <img src={Icon3} alt="Twitter" className="object-contain w-16 h-16 md:w-20 md:h-20 mb-2" />

              <div className="">
                <h2 className="text-lg md:text-xl font-bold mt-5 max-sm:font-semibold max-sm:text-xl">Twitter</h2>
                <p className="text-sm md:text-base mt-5 mb-5 max-sm:text-sm">Stay updated with the latest development.</p>
                <a href="" className="text-yellow underline font-bold">Follow Now</a>
              </div>
            </div>

          </div>

        </div>

        {/* Column Two */}

        <div className="w-full sm:w-1/2 md:w-2/3 px-4 sm:px-8 lg:px-12 xl:px-16 ">

          <div className="mx-auto mt-10 p-6 bg-white rounded-3xl shadow-md">
            <form>
              <div className="mb-4 mt-10">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-6 py-4 border border-black rounded-md focus:outline-none focus:border-black"
                  placeholder="Eg, John Doe"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-6 py-4 border border-black rounded-md focus:outline-none focus:border-black"
                  placeholder="Eg, email@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-6 py-4 border border-black rounded-md focus:outline-none focus:border-black"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow mt-10 mb-10 py-2 px-4 rounded-md hover:bg-light focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;


