
import React, { useState } from 'react';

const SignInHero = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-yellow rounded-3xl min-h-screen py-20">
      <h1 className="text-6xl mb-4 text-center">Sign In</h1>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm mb-2 mt-5" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 mt-3 border border-black rounded-md focus:outline-none focus:border-black"
              placeholder="E.g, email@example.com"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-6 py-4 mt-3 border border-black rounded-md focus:outline-none focus:border-black"
              placeholder="*************"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow py-2 px-4 rounded-md hover:bg-light focus:outline-none mt-5 mb-5">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignInHero;
