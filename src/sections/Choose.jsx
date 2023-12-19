import Image1 from "../assets/Choose Country@2x.png";
import Button from "../components/Button";

const Choose = () => {
    return (
        <section id="Choose" className="py-10">
            <div className="max-container mx-auto flex flex-col lg:flex-row items-center lg:gap-24">
                {/* Image on larger screens */}
                <div className="lg:flex-1 hidden lg:block">
                    <img
                        src={Image1}
                        alt="Choose Country"
                        width={570}
                        height={522}
                        className="object-contain"
                    />
                </div>

                <div className="lg:flex-1">
                    <h1 className="text-3xl max-sm:text-2xl font-semibold mb-3">
                        Choose from thousands of numbers in more than 200+ Countries.
                    </h1>

                    {/* Image on mobile screens */}
                    <div className="lg:hidden mb-6">
                        <img
                            src={Image1}
                            alt="Choose Country"
                            width={570}
                            height={522}
                            className="object-contain"
                        />
                    </div>

                    <p className="text-sm mt-2 mb-2 max-sm:text-sm">
                        SMSPadi has more than 500,000 online numbers from 200+ countries
                        worldwide.
                    </p>
                    <p className="text-sm mt-2 mb-2 max-sm:text-sm">
                        You can find mobile numbers for registration in almost any country,
                        including the UK, Russia, Sweden, Germany, France, India, Indonesia,
                        Malaysia, Cambodia, Mongolia, Canada, the USA, Thailand, the
                        Netherlands, Spain, and others.
                    </p>

                    <div className="flex max-sm:justify-end items-center w-full mt-5">
                        <Button label="Get Started" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;
