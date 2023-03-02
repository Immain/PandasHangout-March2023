import React from "react";
import Footer from "../../Navigation/Footer";
import Navbar from "../../Navigation/Navbar";
import { SiDiscord, SiYoutube, SiTwitter } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* Hero */}
      <div
        className="hero min-h-[40vh] bg-base-200"
        style={{
          backgroundImage: `url("https://i.redd.it/i3lk0koaztd81.gif")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-green-400 ">
              Contact Us!
            </h1>
            <p className="mb-5 text-white">
              At Panda's Hangout, the partners we work with are hand-picked and
              must fulfill an extensive list of requirements regarding quality,
              reliability, security and response time. We run our own
              data-center so that we do not have to out-source our servers
              somewhere else. This helps us to keep our cost low and provide
              these servers at no cost. We hope that you enjoy Panda's Hangout
              and if you need to reach out, please feel free to do so.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="bg-neutral">
        <div className="py-8 px-4 mx-auto max-w-[1240px] lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h1 className="text-3xl uppercase font-extrabold text-green-400">
              Contact us on Social Media
            </h1>
            <p className="mt-4 text-white">
              We are always open to your suggestions and feedback.
            </p>

            {/* Social Media Grid */}
            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Discord */}
              <div className="flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-lg gap-2">
                <SiDiscord className="mx-auto text-green-400" size={40} />
                <div className="mt-4 text-center space-y-5">
                  <h3 className="text-lg font-medium text-white">Discord</h3>
                  <p className="mt-2 text-white">
                    Contact us on Discord for any questions or suggestions.
                  </p>
                  <div>
                    <a href="https://discord.gg/AADtzrDMNa">
                      <button className="btn bg-green-400 hover:bg-green-600 text-black">
                        Let's Go
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* YouTube */}
              <div className="flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-lg gap-2">
                <SiYoutube className="mx-auto text-green-400" size={40} />
                <div className="mt-4 text-center space-y-5">
                  <h3 className="text-lg font-medium text-white">YouTube</h3>
                  <p className="mt-2 text-white">
                    Contact us on YouTube for any questions or suggestions.
                  </p>
                  <div>
                    <a href="https://www.youtube.com/@pandashangout">
                      <button className="btn bg-green-400 hover:bg-green-600 text-black">
                        Let's Go
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Twitter*/}
              <div className="flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-lg gap-2">
                <SiTwitter className="mx-auto text-green-400" size={40} />
                <div className="mt-4 text-center space-y-5">
                  <h3 className="text-lg font-medium text-white">Twitter</h3>
                  <p className="mt-2 text-white">
                    Contact us on Twitter for any questions or suggestions.
                  </p>
                  <div>
                    <a href="https://twitter.com/PndasHangout">
                      <button className="btn bg-green-400 hover:bg-green-600 text-black">
                        Let's Go
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* End of Social Media Grid */}
            </div>

            <div className="divider"></div>

            {/* Looking For? */}
            <div className="space-y-4">
              <h1 className="text-2xl uppercase font-extrabold text-green-400">
                Not Finding What You're Looking For?
              </h1>
              <div>
                <a href="mailto:help@pandadatasystems.com">
                  <button className="btn btn-outline border-green-400 text-green-400 hover:bg-green-500 hover:border-none">
                    Send Us an Email
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
