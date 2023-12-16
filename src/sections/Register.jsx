import Image1 from "../assets/Choose Service.png";
import Button from "../components/Button";

const Register = () => {
  return (
    <section id="Choose" className="">
      <div className="flex justify-between items-center max-lg:flex-col gap-24 w-full max-container">

        <div className="flex-1">
          <h1 className="text-3xl max-sm:font-semibold max-sm:text-2xl font-semibold"> Register on thousands of <br />social media platforms, <br />apps and websites. </h1>
          <p className=" text-base font-montserrat mt-5 max-sm:text-sm" > We enable you to easily register on and get <br /> SMS verification for social   networks, <br /> messengers, payment systems, dating sites, and <br /> any other services that require SMS verification.</p>

          <p className="mt-5 max-sm:text-sm">Get a virtual phone number in just a few <br /> minutes and protect your privacy.</p>

          <div className="flex max-sm:justify-end items-center max-sm:w-full mt-10">
            <Button label="Get Started" />
          </div>
        </div>

        <div className="flex-1">
          <img src={Image1} alt="Choose Country"
            width={570} height={522}
            className="object-contain"
          />
        </div>



      </div>
    </section >
  )
}

export default Register