import React from "react";
import { useState, useEffect } from "react";
import Footer from "../../../Navigation/Footer";
import Navbar from "../../../Navigation/Navbar";

const { VITE_MINECRAFT } = import.meta.env;

const Craft = () => {
  const [status, setStatus] = useState("...Loading");
  const [players, setPlayers] = useState("...Loading");
  const [maxplayers, setMaxPlayers] = useState("...Loading");

  useEffect(() => {
    fetch(`https://api.battlemetrics.com/servers/${VITE_MINECRAFT}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.data.attributes.status);
        setPlayers(data.data.attributes.players);
        setMaxPlayers(data.data.attributes.maxPlayers);
      });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div
        className="hero min-h-[40vh] bg-base-200"
        style={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp8484601.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-green-400 ">
              Minecraft
            </h1>
            <p className="mb-5 text-white">
              The crew at Panda's Hangout have been playing Minecraft for well
              over 10 years. Come join us on our journey to create an SMP server
              for the entire Panda's Hangout community. Minecraft is the
              best-selling video game of all time, selling over 200 million
              copies across all platforms, at the end of 2019, more than 126
              million active players.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}

      {/* Server Status */}
      <section className="mx-auto dark:bg-neutral">
        <div className="px-6 py-8 mx-auto max-w-[1240px]">
          <h2 className="text-3xl text-center text-green-400 uppercase font-extrabold">
            Server Status
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-center text-black dark:text-white">
            If you are having issues connecting, please check the status of the
            servers below.
          </p>

          {/* Server Status */}
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-1 lg:grid-cols-1">
            {/* Minecraft Stat*/}
            <div className="stat dark:bg-gray-800 border-2 border-slate-800 rounded-2xl max-w-[500px] mx-auto">
              <div className="stat-figure text-">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title text-black dark:text-white">
                Minecraft | playmc.pandasahangout.com
              </div>
              <div className="stat-value">
                {status === "online" ? (
                  <span className="text-green-400">online</span>
                ) : (
                  <span className="text-red-500">Offline</span>
                )}
              </div>
              <div className="stat-desc text-black dark:text-white">
                Players Online: <span>{players}</span>/<span>{maxplayers}</span>
              </div>
              <div className="stat-desc text-gray-500">
                Updated every 30 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Map */}
      <section className="mx-auto dark:bg-slate-800">
        <div className="px-6 py-8 mx-auto max-w-[1240px]">
          <div className="grid grid-cols-2 gap-6 mt-6 xxs:grid-cols-1 lg:grid-cols-1 items-center space-x-2">
            {/* MC Map */}
            <div className="p-2">
              <div>
                <iframe
                  className="rounded-2xl lg:w-[700px] lg:h-[400px] xxs:w-[325px] xxs:h-[300px] ipad:w-[600px] md:w-[500px] mx-auto lg:mx-auto xxs:mx-auto"
                  src="https://map.pandashangout.com/"
                >
                  <p>Your browser does not support iframes.</p>
                </iframe>
              </div>
            </div>

            {/* MC Information */}
            <div className="mx-auto">
              <div className="">
                <h2 className="text-3xl text-green-400 uppercase font-extrabold xxs:text-center lg:text-center">
                  Minecraft Server Information
                </h2>
                <div className="space-x-2 xxs:text-center lg:text-center">
                  <div className="badge dark:badge-accent dark:badge-outline mt-2">
                    1.18.2 Spigot
                  </div>
                  <div className="badge dark:badge-accent dark:badge-outline mt-2">
                    Towny
                  </div>
                  <div className="badge dark:badge-accent dark:badge-outline mt-2">
                    Survival
                  </div>
                </div>
                <p className="max-w-2xl mx-auto mt-4 text-left text-black dark:text-white xxs:text-center lg:text-left">
                  Hangout SMP is a super chill Minecraft Survival server with
                  quality of life plugins to make your experience better. You
                  can play with your friends, make land claims, create towns,
                  make player warps and so much more! We also have plenty of QoL
                  (quality of life) custom items.
                </p>
                <div className="xxs:text-center lg:text-left items-center flex justify-center">
                  <button className="btn bg-green-400 text-black hover:bg-green-600 mt-4">
                    playmc.pandashangout.com
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Craft;
