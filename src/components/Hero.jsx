import { curve, twitter, batmansignal } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] bg-black -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container bg-black relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 text-4xl leading-relaxed">
            "You either die a hero, or you&nbsp;live long enough to see yourself
            become the villain" ~ {`  `}
            <span className="inline-block relative">
              $GOTHAM{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <div className="flex mt-10 w-full items-center justify-center gap-10">

            {/* <a href="https://x.com/TheGothamCTO" target="_blank"> */}
            {/* <Button className="flex w-42" white> */}
              {/* <div className="w-full h-full flex justify-center items-center"> */}
                {/* <img src={twitter} className="mr-2" /> */}
                {/* <p>Follow on X</p> */}
              {/* </div> */}
            {/* </Button> */}
            {/* </a> */}

            {/* <a href="https://dexscreener.com/solana/6u13sfywqqzdqsvxnbrpygrvdxeryhczjnsfrhi1gaqm" target="_blank"> */}
            {/* <Button className="flex w-42"  white> */}
              {/* <div className="w-full h-full flex justify-center items-center"> */}
                {/* <img src={twitter} className="mr-2" /> */}
                {/* <p>Dexscreener</p> */}
              {/* </div> */}
            {/* </Button> */}
            {/* </a> */}

            {/* <a href="https://t.me/gofgothamtelegram" target="_blank"> */}
            {/* <Button className="flex w-42" href="/pricing" white> */}
              {/* <div className="w-full h-full flex justify-center items-center"> */}
                {/* <img src={twitter} className="mr-2" /> */}
                {/* <p>Join Telegram</p> */}
              {/* </div> */}
            {/* </Button> */}
            {/* </a> */}
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="flex justify-center items-center aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <video className="" width="98%" height="78%" autoPlay muted loop>
                  <source src={batmansignal} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Buy $GOTHAM"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
