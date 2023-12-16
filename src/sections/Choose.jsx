import Image1 from "../assets/Choose Country@2x.png";
import Button from "../components/Button";

const Choose = () => {
    return (
        <section id="Choose" className="">
            <div className="flex justify-between items-center max-lg:flex-col gap-24 w-full max-container">
                <div className="flex-1">
                    <img src={Image1} alt="Choose Country"
                        width={570} height={522}
                        className="object-contain"
                    />
                </div>

                <div className="flex-1">
                    <h1 className="text-3xl max-sm:font-semibold max-sm:text-2xl"> Choose from thousands of <br />numbers in more than <br /> 200+ Countries. </h1>
                    <p className=" text-sm mt-5 mb-2 max-sm:text-sm" > SMSPadi have more than 500,000 online <br />numbers from 200+ countries <br /> worldwide.</p>
                <p className="text-sm mt-5 mb-2 max-sm:text-sm">You can find mobile numbers for registration of almostany country, incluidng the UK, Russia, Sweden, <br /> Germany, France, India, Indonesia, Malaysia, <br /> Cambodia, Monogolia, Canada, the USA, Thailand, the <br /> Netherlands, Spain and others.</p>

                    <div className="flex max-sm:justify-end items-center max-sm:w-full mt-5">
                        <Button label="Get Started" />
                    </div>
                </div>



            </div>
        </section >
    )
}

export default Choose