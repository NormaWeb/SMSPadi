import Image1 from "../assets/Verify Number.png";
import Button from "../components/Button";

const Verify = () => {
  return (
    <section id="Choose" className="py-8 lg:py-10">
      <div className="max-container mx-auto flex flex-col lg:flex-row items-center lg:gap-24">
        <div className="lg:flex-1 lg:pr-6">
          <h1 className="text-3xl max-sm:text-2xl font-semibold mb-3">
            Verify any social media platform instantly.
          </h1>

          <p className="text-base font-montserrat mt-2 mb-2 max-sm:text-sm">
            Receive verification codes without privacy worries or hassle. Register now to get started.
          </p>

          <div className="flex max-sm:justify-end items-center w-full mt-5 lg:mt-8 text-white">
            <Button
              label="Get Started"
              backgroundColor='bg-black'
            />
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

export default Verify;
