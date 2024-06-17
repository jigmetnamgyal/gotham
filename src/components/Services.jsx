import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check, batman, gothambat, jockerface,render } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";


const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="In $GOTHAM We trust."
          text="We are on our mission to educate crypto and save the solana city of fud and Rug pull"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              {/* <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={batman}
              /> */}

            <video className="flex justify-center items-center" width="100%" height="100%" autoPlay muted loop>
                  <source src={jockerface} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            </div>

            <div className="relative z-1 max-w-[20rem] ml-auto">
              <h4 className="h4 mb-4">Mission</h4>
              <p className="body-2 mb-[3rem] text-white">
              We will fight against all the crypto frauds and provide a safe, secure, and transparent environment for investors
              </p>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex justify-center items-center">
                {/* <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
            /> */}

              <video className="flex justify-center items-center" width="100%" height="100%" autoPlay muted loop>
                  <source src={gothambat} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Vision</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                To be the vigilant guardians of the cryptocurrency realm, ensuring a dark knight’s watch over, banishing fraud and deception from the shadows.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Motto</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Guarding Your Crypto, Vanquishing Fraud.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
              <video className="flex justify-center items-center" width="100%" height="100%" autoPlay muted loop>
                  <source src={render} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
