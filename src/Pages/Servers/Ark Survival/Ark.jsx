import React from "react";
import { useState, useEffect } from "react";
import Footer from "../../../Navigation/Footer";
import Navbar from "../../../Navigation/Navbar";

const {VITE_ARK_RAGNAROK, VITE_ARK_FJORDUR, VITE_ARK_ABERRATION, VITE_ARK_ISLAND} = import.meta.env;

const Ark = () => {
  /* Fjordur */
  const [players, setPlayers] = useState("...Loading");
  const [country, setCountry] = useState("...Loading");
  const [status, setStatus] = useState("...Loading");

  useEffect(() => {
    fetch(`https://api.battlemetrics.com/servers/${VITE_ARK_FJORDUR}`)
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data.data.attributes.players);
        setCountry(data.data.attributes.country);
        setStatus(data.data.attributes.status);
      });
  }, []);

  /* Ragnarok */
  const [playersR, setPlayersR] = useState("...Loading");
  const [countryR, setCountryR] = useState("...Loading");
  const [statusR, setStatusR] = useState("...Loading");

  useEffect(() => {
    fetch(`https://api.battlemetrics.com/servers/${VITE_ARK_RAGNAROK}`)
      .then((res) => res.json())
      .then((data) => {
        setPlayersR(data.data.attributes.players);
        setCountryR(data.data.attributes.country);
        setStatusR(data.data.attributes.status);
      });
  }, []);

  /* Aberration */
  const [playersA, setPlayersA] = useState("...Loading");
  const [countryA, setCountryA] = useState("...Loading");
  const [statusA, setStatusA] = useState("...Loading");

  useEffect(() => {
    fetch(`https://api.battlemetrics.com/servers/${VITE_ARK_ABERRATION}`)
      .then((res) => res.json())
      .then((data) => {
        setPlayersA(data.data.attributes.players);
        setCountryA(data.data.attributes.country);
        setStatusA(data.data.attributes.status);
      });
  }, []);

  /* The Island */
  const [playersI, setPlayersI] = useState("...Loading");
  const [countryI, setCountryI] = useState("...Loading");
  const [statusI, setStatusI] = useState("...Loading");

  useEffect(() => {
    fetch(`https://api.battlemetrics.com/servers/${VITE_ARK_ISLAND}`)
      .then((res) => res.json())
      .then((data) => {
        setPlayersI(data.data.attributes.players);
        setCountryI(data.data.attributes.country);
        setStatusI(data.data.attributes.status);
      });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div
        className="hero min-h-[40vh] bg-base-200"
        style={{
          backgroundImage: `url("https://asset.vg247.com/Ark-Survival-Evolved-Shot-02.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/Ark-Survival-Evolved-Shot-02.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-green-400">
              Ark Survival Evolved
            </h1>
            <p className="mb-5 text-white">
              Hey Survivors! We currently host four servers on our platform, The
              Island, Ragnarok, Fjordur, and Aberration (Clustered). The servers
              are automatically updated every Saturday at 3am PST and
              automatically backed up every two hours on the dot (Does not
              affect gameplay).
            </p>

            {/* Game Stats */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Player level */}
              <div className="border-2 border-sky-500 rounded-xl">
                <h1 className="text-2xl text-white">350</h1>
                <p className="text-white font-bold">Max Player Level</p>
              </div>

              {/* Dino level */}
              <div className="border-2 border-red-500 rounded-xl">
                <h1 className="text-2xl text-white">1050</h1>
                <p className="text-white font-bold">Max Dino Level</p>
              </div>

              {/* Server Mods */}
              <div className="border-2 border-yellow-500 rounded-xl">
                <h1 className="text-2xl text-white">9</h1>
                <p className="text-white font-bold">Server Mods</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Server Status */}
      <section className="mx-auto bg-neutral">
        <div className="px-6 py-8 mx-auto max-w-[1240px]">
          <h2 className="text-3xl text-center text-green-400 uppercase font-extrabold">
            Server Status
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-center text-white">
            If you are having issues connecting, please check the status of the
            servers below.
          </p>

          {/* Stats Grid */}
          <div className="grid lg:grid-cols-4 xxs:grid-cols-1 gap-6 mt-8 mx-auto">
            {/* Fjordur Stat*/}
            <div className="stat bg-gray-800 rounded-2xl">
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
              <div className="stat-title text-white">
                Ark Survival | Fjordur
              </div>
              <div className="stat-value">
                {status === "online" ? (
                  <span className="text-green-400">online</span>
                ) : (
                  <span className="text-red-500">Offline</span>
                )}
              </div>
              <div className="stat-desc text-white">
                Players Online: <span>{players}</span>/50
              </div>
              <div className="stat-desc text-white">
                Country: <span>{country}</span>
              </div>
              <div className="stat-desc text-gray-500">
                Updated every 30 minutes
              </div>
            </div>

            {/* Ragnarok Stat*/}
            <div className="stat bg-gray-800 rounded-2xl">
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
              <div className="stat-title text-white">
                Ark Survival | Ragnarok
              </div>
              <div className="stat-value">
                {statusR === "online" ? (
                  <span className="text-green-400">online</span>
                ) : (
                  <span className="text-red-500">Offline</span>
                )}
              </div>
              <div className="stat-desc text-white">
                Players Online: <span>{playersR}</span>/50
              </div>
              <div className="stat-desc text-white">
                Country: <span>{countryR}</span>
              </div>
              <div className="stat-desc text-gray-500">
                Updated every 30 minutes
              </div>
            </div>

            {/* Aberration Stat*/}
            <div className="stat bg-gray-800 rounded-2xl">
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
              <div className="stat-title text-white">
                Ark Survival | Aberration
              </div>
              <div className="stat-value">
                {statusA === "online" ? (
                  <span className="text-green-400">online</span>
                ) : (
                  <span className="text-red-500">Offline</span>
                )}
              </div>
              <div className="stat-desc text-white">
                Players Online: <span>{playersA}</span>/50
              </div>
              <div className="stat-desc text-white">
                Country: <span>{countryA}</span>
              </div>
              <div className="stat-desc text-gray-500">
                Updated every 30 minutes
              </div>
            </div>

            {/* The Island Stat*/}
            <div className="stat bg-gray-800 rounded-2xl">
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
              <div className="stat-title text-white">
                Ark Survival | The Island
              </div>
              <div className="stat-value">
                {statusI === "online" ? (
                  <span className="text-green-400">online</span>
                ) : (
                  <span className="text-red-500">Offline</span>
                )}
              </div>
              <div className="stat-desc text-white">
                Players Online: <span>{playersI}</span>/50
              </div>
              <div className="stat-desc text-white">
                Country: <span>{countryI}</span>
              </div>
              <div className="stat-desc text-gray-500">
                Updated every 30 minutes
              </div>
            </div>

            {/* Stats End*/}
          </div>
        </div>
      </section>

      {/* Server Information */}
      <section className="mx-auto bg-slate-800 p-4">
        <div className="px-6 py-8 mx-auto max-w-[1240px]">
          <h2 className="text-3xl text-center text-green-400 uppercase font-extrabold">
            Server Information
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-center text-white">
            Available Clustered game maps and information about the server.
          </p>
        </div>

        {/* Ark Page Modals*/}

        {/* Server Rules Modal */}
        <input type="checkbox" id="server-rules" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-xl text-green-400">Server Rules</h3>

            {/* All Server Rules */}
            <div className="">
              <p className="py-4 text-white">
                The general operation of these rules is more ‘spirit of the law’
                mindset rather than a ‘letter of the law’ mindset, and as such
                are purposely loose. The absence of an item in these rules does
                not imply permission. If an item appears to not be in line with
                the following ruleset, then it is most likely to be frowned
                upon. Please use common sense and err on the side of caution.
              </p>
              <div className="divider"></div>
              <p className="py-4 text-white">
                1. No harassment or personal attacks upon other players either
                in the game or on discord. (This includes things such as
                handcuffing a player for a significant amount of time,
                spawn-camping, repeatedly raiding someone in a short period of
                time, or steamrolling defenseless tribes.)
              </p>
              <p className="py-4 text-white">
                2. No excessive raiding. (This includes things such as raiding
                someone's base multiple times in a short period of time, raiding
                someone's base with a significantly larger tribe, or raiding
                someone's base with a significantly larger tribe multiple times
                in a short period of time.)
              </p>
              <p className="py-4 text-white">
                3. ABSOLUTELY no racism, sexism, or hate speech either on the
                server or on the Discord. This extends to Discord and in-game
                names/aliases as well. (this includes things such as using
                racial slurs, sexist slurs, making fun of anyone who identifies
                as LGBTQ+, or making fun of anyone who has a disability.)
              </p>
              <p className="py-4 text-white">
                4. No excessive griefing. (This includes things such as
                repeatedly greifing a player's dinos, base, or unlocked
                inventory, to gain an unfair advantage.)
              </p>
              <p className="py-4 text-white">
                5. No excessive trolling. (This includes things such as
                repeatedly trolling a player, or trolling a player multiple
                times in a short period of time.)
              </p>
              <p className="py-4 text-white">
                6. No blocking or impeding access to loot crate or artifact
                spawns.
              </p>
              <p className="py-4 text-white">
                7. Any player who has not been active on the server for 90 days
                will be removed from the server. (This includes things such as
                dinos, structures, and items.)
              </p>
              <p className="py-4 text-red-500 font-bold">
                Note: Breaking of Rule 3 is grounds for immediate and permanent
                ban, while other rule violations are subject to either a
                temporary ban or other punishments determined by the admin team.
                Punishment for breaking of rules is dependent upon the severity
                and circumstances of the rulebreak. Issues are dealt with on a
                case-by-case basis rather than the addition of new rules.
              </p>
            </div>
            {/* End of All Server Rules */}

            <div className="modal-action">
              <label htmlFor="server-rules" className="btn">
                Okay
              </label>
            </div>
          </div>
        </div>

        {/* Server Info Modal */}
        <input type="checkbox" id="server-info" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-xl text-green-400">
              Server Configuration
            </h3>
            <p className="py-4">
              To preserve the Panda's Hangout Ark experience, all PVE servers
              share the exact same configuration and multiplier settings.
            </p>
            <div className="divider"></div>
            {/* Main Settings */}
            <div>
              <p className="py-4 text-white border-l-2 pl-2 border-red-500 font-bold">
                Main Settings
              </p>
            </div>
            <div className="divider"></div>
            <div className="text-white space-y-2">
              <p>Max Player Level: 350</p>
              <p>Max Wild Dino Level: 1050</p>
              <p>Max Tamed Dino Level: 350</p>
              <p>Gathering: 25x</p>
              <p>XP: 25x</p>
              <p>Taming: 25x</p>
              <p>Harvesting: 25x</p>
              <p>Mating Interval: 1x</p>
              <p>Egg Hatch Speed: 25x</p>
              <p>Baby Mature Speed: 25x</p>
              <p>Player Food/Water Drain: 0.5x</p>
              <p>Player Health Recovery: 2x</p>
              <p>Dino Health Recovery: 2x</p>
              <p>Wild Dino Resistance: 0.66x</p>
              <p>Player Damage: 2X</p>
              <p>Player Resistance: 0.5x</p>
              <p>Resource Spawn Period: 5x</p>
              <p>Hardcore Mode: False</p>
              <p>Gamma Enabled: True</p>
              <p>Night/Day Speed: 2x longer days, normal nights</p>
              <p>Floating Damage Text: True</p>
              <p>PVP Dino Decay: True</p>
              <p>PVP Structure Decay: True</p>
              <p>Max Players in Tribe: 10</p>
              <p>Spikes Damages Wild Dinos: True</p>
              <p>Dino Turret Damage: 4x</p>
            </div>
            {/* End of Main Settings */}
            <div className="divider"></div>
            {/* Per Level Stat Multipliers */}
            <p className="py-4 text-white border-l-2 pl-2 border-red-500 font-bold">
              Per Level Stat Multipliers
            </p>
            <div className="divider"></div>
            <div className="text-white space-y-2">
              <p>Player Weight: 3x</p>
              <p>Crafting Speed: 2x</p>
              <p>Tamed Dino Weight: 2.5x</p>
              <p>Tamed Dino Melee: 2x</p>
            </div>
            {/* End of Per Level Stat Multipliers */}
            <div className="modal-action">
              <label htmlFor="server-info" className="btn">
                Okay
              </label>
            </div>
          </div>
        </div>

        {/* Button Grid */}
        <div className="flex justify-center space-x-2 max-w-[1240px] mx-auto">
          <div className="space-x-2 xxs:flex-col xxs:text-center space-y-2">
            <label
              htmlFor="server-rules"
              className="btn bg-green-400 text-black hover:bg-green-600"
            >
              Server Rules
            </label>
            <a
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=2608925441"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn bg-green-400 text-black hover:bg-green-600">
                Mod Collection
              </button>
            </a>
            <label
              htmlFor="server-info"
              className="btn bg-green-400 text-black hover:bg-green-600"
            >
              Server Information
            </label>
          </div>
        </div>

        <div className="divider"></div>

        {/* Server Grid */}
        <div className="grid lg:grid-cols-2 xxs:grid-cols-1 gap-2 mt-4 mx-auto max-w-[1240px] items-center">
          {/* The Island */}
          <div className="px-2 p-6">
            <img
              className="rounded-2xl w-[575px] shadow-lg shadow-red-500/75 ipad:mx-auto ipad-air:mx-auto md:mx-auto"
              src="https://steamuserimages-a.akamaihd.net/ugc/109607797356173184/1039C19EE7307EE087FB3B73C4495E407CCB9365/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
              alt="The Island"
            />
          </div>
          <div className="px-6 py-8 mx-auto max-w-[1240px] space-y-4 xxs:text-center lg:text-left">
            <h2 className="text-3xl text-left text-green-400 uppercase font-extrabold xxs:text-center lg:text-left">
              The Island
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-left text-white xxs:text-center lg:text-left">
              The Island is a large landmass with several smaller islands
              surrounding the central island. Resources become more common as
              one travels farther inland, but so do the dangers. Some areas are
              higher in temperature while others are lower which can be life
              threatening.
            </p>
            <div>
              <a href="steam://connect/75.141.167.124:27015">
                <button className="btn bg-green-400 hover:bg-green-500 text-black xxs:text-center lg:text-left">
                  Join Server
                </button>
              </a>
            </div>
          </div>

          {/* Aberration */}
          <div className="px-2 p-6">
            <img
              className="rounded-2xl w-[575px] shadow-lg shadow-indigo-700/75 ipad:mx-auto ipad-air:mx-auto md:mx-auto"
              src="https://steamuserimages-a.akamaihd.net/ugc/848221720756130459/67A7617A1F7291928746D4C4556EAD9294BB7411/?imw=1024&imh=580&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
              alt="The Island"
            />
          </div>
          <div className="px-6 py-8 mx-auto max-w-[1240px] space-y-4">
            <h2 className="text-3xl text-left text-green-400 uppercase font-extrabold xxs:text-center lg:text-left">
              Aberration
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-left text-white xxs:text-center lg:text-left">
              The intense radiation of Aberration has led to incredible genetic
              mutations, resulting in new creatures with amazing abilities!
              Among others, clamber up walls & glide through the air on the back
              of a camouflaging chameleon-like ‘Rock Drake’, keep the dark at
              bay with a friendly ‘Bulbdog’, grab and toss multiple creatures
              simultaneously with a massive ‘Karkinos’, or—if you are talented
              enough to tame one—command the vile ‘Reaper’ by being impregnated
              with a horrifying reproductive chest-burster!
            </p>
            <div className="xxs:text-center lg:text-left">
              <a href="steam://connect/75.141.167.124:27024">
                <button className="btn bg-green-400 hover:bg-green-500 text-black">
                  Join Server
                </button>
              </a>
            </div>
          </div>

          {/* Fjordur */}
          <div className="px-2 p-6">
            <img
              className="rounded-2xl w-[575px] shadow-lg shadow-yellow-500/75 ipad:mx-auto ipad-air:mx-auto md:mx-auto"
              src="https://p9x5c4m9.rocketcdn.me/wp-content/uploads/2022/05/fj.jpg"
              alt="The Island"
            />
          </div>
          <div className="px-6 py-8 mx-auto max-w-[1240px] space-y-4">
            <h2 className="text-3xl text-left text-green-400 uppercase font-extrabold xxs:text-center lg:text-left">
              Fjordur
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-left text-white xxs:text-center lg:text-left">
              Explore a cold and hostile Norse-inspired archipelago in ARK's
              newest official community map, featuring four new creatures for
              you to collect! Fjordur contains over 140 square kilometers of new
              biomes, new challenges, and rewarding discoveries!
            </p>
            <div className="xxs:text-center lg:text-left">
              <a href="steam://connect/75.141.167.124:27021">
                <button className="btn bg-green-400 hover:bg-green-500 text-black">
                  Join Server
                </button>
              </a>
            </div>
          </div>

          {/* Ragnarok */}
          <div className="px-2 p-6">
            <img
              className="rounded-2xl w-[575px] shadow-lg shadow-orange-600/75 ipad:mx-auto ipad-air:mx-auto md:mx-auto"
              src="https://i.ytimg.com/vi/NfaOogXlG3g/maxresdefault.jpg"
              alt="The Island"
            />
          </div>
          <div className="px-6 py-8 mx-auto max-w-[1240px] space-y-4">
            <h2 className="text-3xl text-left text-green-400 uppercase font-extrabold xxs:text-center lg:text-left ">
              Ragnarok
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-left text-white xxs:text-center lg:text-left">
              Journey through an expansive 144 sq. kilometer environment where
              elements from The Island, Scorched Earth, and all new biomes are
              combined to bring the ultimate survivor experience. Whether
              tackling the extreme cold atop the highest mountains, harvesting
              resources from an active volcano, or just searching for that
              perfect base location, Ragnarok plays host to explorers and base
              builders alike.
            </p>
            <div className="xxs:text-center lg:text-left">
              <a href="steam://connect/75.141.167.124:27048">
                <button className="btn bg-green-400 hover:bg-green-500 text-black">
                  Join Server
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ark;
