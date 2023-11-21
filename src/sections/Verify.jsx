import Image1 from "../assets/Verify Number.png";
import Button from "../components/Button";

const Verify = () => {
  return (
    <section id="Choose" className="">
      <div className="flex justify-between items-center max-lg:flex-col gap-24 w-full max-container">

        <div className="flex-1">
          <h1 className="text-3xl"> Verify any social media <br /> platform instantly.  </h1>

          <p className=" text-base font-montserrat mt-8 " > Receive verification codes without privacy <br /> worries or hassle. Register now to get started.</p>

          <div className="flex max-sm:justify-end items-center max-sm:w-full mt-8 text-white">
                    <Button label="Get Started" 
                    backgroundColor='bg-black' 
                    />
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

export default Verify