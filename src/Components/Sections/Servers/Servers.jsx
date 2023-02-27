import React from "react";
import gaming from "../../../assets/videos/gaming.mp4";
import { Link } from "react-router-dom";

const Servers = () => {
  return (
    <section className="xxs:py-16 xxs:px-10 lg:px-0 lg:py-0 xxs:bg-neutral lg:pb-10 lg:bg-transparent">
      <video
        src={gaming}
        autoPlay
        loop
        muted
        className="lg:w-full lg:h-full object-cover absolute -z-10 brightness-50 xxs:w-[200px]"
      />
      <h1 className="text-4xl font-extrabold text-center text-green-400 uppercase mx-auto p-3">
        Game Servers
      </h1>
      <h1 className="text-3xl text-white mb-4 tracking-tight font-extrabold text-center">
        {" "}
        Get access to the latest and greatest games on our servers!
      </h1>
      <p className="text-center text-white text-xl mx-auto tracking-tight max-w-[700px] p-3">
        We host a variety of game servers for you to play on. We host Minecraft,
        Ark Survival Evolved, and more! To get more information or just looking
        to hang out with us, join our Discord!
      </p>

      {/* Card Grid */}
      <div className="grid lg:grid-cols-2 xxs:grid-cols-1 xxxs:grid-col-1 mt-8 mx-auto max-w-[1240px] gap-6 ">
        {/* Card 1 */}
        <div className="card lg:w-[450px] bg-base-100 shadow-md shadow-green-400 lg:mx-auto xxs:w-70">
          <figure>
            <img
              src="https://altarofgaming.com/ark-survival-evolved-beginners-guide/castoroides/"
              alt="Ark Survival Evolved"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-white mx-auto">
              Ark Survival Evolved
            </h2>
            <p className="text-white text-center">
              Live the ultimate survival fantasy with ARK: Survival Evolved on our dedicated server!
            </p>
            <Link to="/servers/ark">
              <div className="card-actions justify-end">
                <button className="btn mx-auto bg-green-400 hover:bg-green-600 text-black">
                  Server Info
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card lg:w-[450px] bg-base-100 shadow-md shadow-yellow-300 lg:mx-auto xxs:w-70">
          <figure>
            <img
              src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/28/bjoyslzjb3uxqyg82uz2/minecraft"
              alt="Minecraft"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-white mx-auto">
              Minecraft
            </h2>
            <p className="text-white text-center">
              Come join us on our Minecraft server! We have a variety of plugins to make your experience more enjoyable!
            </p>
            <Link to="/servers/minecraft">
              <div className="card-actions justify-end">
                <button className="btn mx-auto bg-green-400 hover:bg-green-600 text-black">
                  Server Info
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servers;
