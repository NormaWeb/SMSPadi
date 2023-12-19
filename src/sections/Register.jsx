import Image1 from "../assets/Choose Service.png";
import Button from "../components/Button";

const Register = () => {
  return (
    <section id="Choose" className="py-10">
      <div className="max-container mx-auto flex flex-col lg:flex-row items-center lg:gap-24">
        <div className="lg:flex-1 lg:pr-6">
          <h1 className="text-3xl max-sm:text-2xl font-semibold mb-3">
            Register on thousands of social media platforms, apps, and websites.
          </h1>
          <p className="text-base font-montserrat mt-2 mb-2 max-sm:text-sm">
            We enable you to easily register on and get SMS verification for social
            networks, messengers, payment systems, dating sites, and any other services that require SMS verification.
          </p>
          <p className="mt-2 max-sm:text-sm">
            Get a virtual phone number in just a few minutes and protect your privacy.
          </p>

          <div className="flex max-sm:justify-end items-center w-full mt-5">
            <Button label="Get Started" />
          </div>
        </div>

        <div className="lg:flex-1 lg:pl-6">
          <img
            src={Image1}
            alt="Choose Country"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
