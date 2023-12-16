import Image1 from "../assets/How it Works@2x.png";

const Smspadi = () => {
  return (
    <section id="Smspadi" className="">
      <div className="flex justify-between max-lg:flex-col gap-24 w-full max-container">
        <div className="flex-1">
          <img
            src={Image1}
            alt="How it Works"
            className="object-contain mx-auto max-w-full"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl mt-20 max-sm:font-semibold max-sm:text-2xl font-semibold">Using Smspadi is as easy as 1,2,3...</h1>

          <h3 className="text-2xl font-semibold mt-10 max-sm:text-xl">1. Get a virtual phone number</h3>
          <p className="text-base mt-5 max-sm:text-sm">After registration, select the country and the service you want and click on the "Buy" button to get the number.</p>

          <h3 className="text-2xl font-semibold mt-5 max-sm:text-xl">2. Accept SMS to the virtual number</h3>
          <p className="text-base mt-5 max-sm:text-sm">Copy the received phone number and paste it into the registration form on the service, from which you need to receive SMS.</p>

          <h3 className="text-2xl font-semibold mt-5 max-sm:text-xl">3. Complete account activation</h3>
          <p className="text-base mt-5 max-sm:text-sm">Use the verification code from the received SMS on the SMSPadi website to activate the account on the service.</p>
        </div>
      </div>
    </section>
  );
};

export default Smspadi;
