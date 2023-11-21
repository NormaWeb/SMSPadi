
import React, { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(Array(7).fill(false));

  const toggleAccordion = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  const questions = [
    "What is the SMS verification service?",
    "What is a virtual number?",
    "Do I need a SIM card to use my virtual number?",
    "Can I get a text message for free?",
    "What do I do if I can't buy a virtual number?",
    "What does it mean to receive SMS from a website online?",
    "Will someone have access to my number after my rent is up?"
  ];

  const answers = [
    " SMS verification service is a method to confirm user identity by sending a unique code via SMS.",
    " A virtual number is a phone number that is not tied to a specific device or location.",
    " No, you don't need a physical SIM card to use a virtual number.",
    " Some services offer free text messages, but it depends on the provider.",
    " If you can't buy a virtual number, you may need to explore alternative providers or contact support.",
    " Receiving SMS from a website online means getting text messages through the internet, often used for verification purposes.",
    " Generally, no. Access to your number is usually restricted after the rental period ends."
  ];

  return (
    <div className="">
      <h1 className="text-3xl mb-4 text-center">Frequenty Asked Questions</h1>
      <div className="flex flex-wrap">
        {questions.map((question, index) => (
          <div key={index} className="w-full sm:w-1/2 p-4">
            {/* Button to toggle the box */}
            <div
              className="border border-black p-4 rounded-lg cursor-pointer text-2xl"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{question}</h2>
            </div>

            {/* Content for the box, conditionally rendered based on isOpen state */}
            {isOpen[index] && (
              <div className="border border-black p-4 rounded-lg mt-2 text-2xl">
                <p>{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

