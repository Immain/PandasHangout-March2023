import Footer from "../../Navigation/Footer";
import { useEffect, useState } from "react";
import Navbar from "../../Navigation/Navbar";
import { SiSteam, SiTwitch, SiYoutube } from "react-icons/si";
import KingPanda from "../../assets/KingPanda.png";
import ChewieBell from "../../assets/ChewieBell.png";
import PurpleSheep from "../../assets/PurpleSheep.png";
import YMFTS2BB from "../../assets/YMFTS2BB.png";

const About = () => {
  const [ping, setPing] = useState("Healthy");
  useEffect(() => {
    fetch("https://pandashangout.com/")
      .then((res) => {
        if (res.status === 200) {
          setPing("Healthy");
        } else {
          setPing("Unhealthy");
        }
      })
      .catch((err) => {
        setPing("Unhealthy");
      });
  }, []);

  const [discordMembers, setDiscordMembers] = useState("...Loading");

  useEffect(() => {
    fetch("https://discord.com/api/guilds/518285311495897094/widget.json")
      .then((res) => res.json())
      .then((data) => {
        setDiscordMembers(data.presence_count);
      })
      .catch((err) => {
        setDiscordMembers(0);
      });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div
        className="hero min-h-[40vh] bg-base-200"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7776221/pexels-photo-7776221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-green-400 ">
              Life is Better With Friends
            </h1>
            <p className="mb-5 text-white">
              Panda's Hangout was created by a group of friends (Panda, Chewie,
              YMFTS2BB, and PurpleZheep) so that we could have everything in one
              place. This website is a work in progress but will eventually
              include the ability to chat with friends during live streams and
              so much more.
            </p>
          </div>
        </div>
      </div>

      {/* Staff Content */}
      <section className="bg-neutral">
        {/* About */}
        <div className="py-8 px-4 mx-auto max-w-[1240px] lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="text-3xl uppercase font-extrabold text-green-400">
              {" "}
              Our Story
            </h2>
            <p className="mt-4 text-white">
              A group of friends (Panda, Chewie, YMFTS2BB, and PurpleZheep) came
              together to create a place where we could hang out and have fun.
              We wanted to create a place where we could chat with each other,
              play games, and watch movies together. We also wanted to create a
              place where we could share our content with each other and the
              world. We hope you enjoy our website and we look forward to seeing
              you in our Discord server.
            </p>
          </div>

          {/* Team */}
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 xxs:grid-cols-1 ipad:grid-cols-1 lg:grid-cols-2">
            {/* Panda */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <img
                src={KingPanda}
                alt="Panda"
                className="lg:w-[200px] lg:rounded-lg xxs:rounded-none xxs:rounded-l-lg ipad:w-[200px] md:w-[200px]"
              />
              <div className="p-5">
                <h3 className="mb-3 text-2xl font-bold text-green-400">
                  King Panda
                </h3>
                <span className="text-white">
                  Founder & Full Stack Developer
                </span>
                <p className="mt-4 text-white">
                  Panda is the founder of Panda's Hangout and is an IRL Full
                  Stack Developer. Panda also loves hanging out with his friends
                  and family, surfing, photography, and playing video games.
                </p>
                <ul className="flex mt-6 space-x-4">
                  <a
                    href="https://steamcommunity.com/id/KingPandaKP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <SiSteam
                        className="hover:text-slate-200 cursor-pointer bg-gray-500 rounded-full px-1 text-black"
                        size={25}
                      />
                    </li>
                  </a>
                  <a
                    href="https://www.twitch.tv/king_pandakp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <SiTwitch
                        className="hover:text-indigo-700  cursor-pointer bg-gray-500 rounded-full px-1 text-black"
                        size={25}
                      />
                    </li>
                  </a>
                  <a
                    href="https://www.youtube.com/@pandashangout"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <SiYoutube
                        className="hover:text-red-500 cursor-pointer bg-gray-500 rounded-full px-1 text-black"
                        size={25}
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            {/* ChewieBell */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <img
                src={ChewieBell}
                alt="ChewieBell"
                className="lg:w-[200px] lg:rounded-lg xxs:rounded-none xxs:rounded-l-lg ipad:w-[200px] md:w-[200px]"
              />
              <div className="p-5">
                <h3 className="mb-3 text-2xl font-bold text-green-400">
                  ChewieBell
                </h3>
                <span className="text-white">Co-Founder</span>
                <p className="mt-4 text-white">
                  ChewieBell is the co-founder of Panda's Hangout and is a
                  part-time streamer over on Twitch. ChewieBell also loves
                  hanging out with his friends and family, watching movies, and
                  playing video games.
                </p>
                <ul className="flex mt-6 space-x-4">
                  <a
                    href="https://steamcommunity.com/profiles/76561198190655638"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <SiSteam
                        className="hover:text-slate-200 cursor-pointer bg-gray-500 rounded-full px-1 text-black"
                        size={25}
                      />
                    </li>
                  </a>
                  <a
                    href="https://www.twitch.tv/chewiebell"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <SiTwitch
                        className="hover:text-indigo-700 cursor-pointer bg-gray-500 rounded-full px-1 text-black"
                        size={25}
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            {/* YMFTS2BB */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <img
                src={YMFTS2BB}
                alt="YMFTS2BB"
                className="lg:w-[200px] lg:rounded-lg xxs:rounded-none xxs:rounded-l-lg ipad:w-[200px] md:w-[200px]"
              />
              <div className="p-5">
                <h3 className="mb-3 text-2xl font-bold text-green-400">
                  YMFTS2BB
                </h3>
                <span className="text-white">Developer</span>
                <p className="mt-4 text-white">
                  YMFTS2BB is a developer at Panda's Hangout and when he's not
                  working on cars, he's helping us work on the website.
                </p>
                <ul className="flex mt-6 space-x-4">
                  <a
                    href="https://steamcommunity.com/id/YMFTS2BB"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <SiSteam
                        className="hover:text-slate-200 cursor-pointer bg-gray-500 rounded-full px-1 text-black"
                        size={25}
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            {/* PurpleZheep */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <img
                src={PurpleSheep}
                alt="PurpleSheep"
                className="lg:w-[200px] lg:rounded-lg xxs:rounded-none xxs:rounded-l-lg ipad:w-[200px] md:w-[200px]"
              />
              <div className="p-5">
                <h3 className="mb-3 text-2xl font-bold text-green-400">
                  PurpleZheep
                </h3>
                <span className="text-white">Editor</span>
                <p className="mt-4 text-white">
                  PurpleZheep is the editor of Panda's Hangout and loves to play
                  video games and hang out with friends.
                </p>
                <ul className="flex mt-6 space-x-4">
                  <a
                    href="https://steamcommunity.com/profiles/76561198313543466"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <SiSteam
                        className="hover:text-slate-200 cursor-pointer bg-gray-500 rounded-full px-1 text-black"
                        size={25}
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1240px] mx-auto">
        <div className="container px-6 py-8 mx-auto">
          <h2 className="text-3xl text-center text-green-400 uppercase font-extrabold">
            Stats That Matter
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-center text-white">
            We are a community of gamers, streamers, and developers. We use the
            latest technologies to create a fun and engaging experience for our
            users, and we are always looking for new ways to improve.
          </p>

          {/* Stats Grid */}
          <div className="grid lg:grid-cols-2 xxs:grid-cols-1 gap-6 mt-8 mx-auto">
            {/* Stat One*/}
            <div className="stat bg-neutral rounded-2xl">
              <div className="stat-figure text-green-400">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title text-white">Pandashangout.com</div>
              <div className="stat-value text-green-400">{ping}</div>
              <div className="stat-desc text-gray-500">Site Status</div>
            </div>

            {/* Stat Two
            <div className="stat bg-neutral rounded-2xl">
              <div className="stat-figure text-primary">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title text-white">Total Likes</div>
              <div className="stat-value text-primary">30</div>
              <div className="stat-desc text-gray-500">
                Total All Time Likes{" "}
              </div>
            </div>
            */}

            {/* Stat Three*/}
            <div className="stat bg-neutral rounded-2xl">
              <div className="stat-figure text-sky-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    d="M12.25 10C11.5596 10 11 9.44036 11 8.75C11 8.05964 11.5596 7.5 12.25 7.5C12.9404 7.5 13.5 8.05964 13.5 8.75C13.5 9.44036 12.9404 10 12.25 10Z"
                    fill="#000000"
                  />
                  <path
                    d="M14.25 12.5C13.5596 12.5 13 11.9404 13 11.25C13 10.5596 13.5596 10 14.25 10C14.9404 10 15.5 10.5596 15.5 11.25C15.5 11.9404 14.9404 12.5 14.25 12.5Z"
                    fill="#000000"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.5 4H5.5C2.73858 4 0.5 6.23858 0.5 9V11C0.5 13.7614 2.73858 16 5.5 16H14.5C17.2614 16 19.5 13.7614 19.5 11V9C19.5 6.23858 17.2614 4 14.5 4ZM2.5 9C2.5 7.34315 3.84315 6 5.5 6H14.5C16.1569 6 17.5 7.34315 17.5 9V11C17.5 12.6569 16.1569 14 14.5 14H5.5C3.84315 14 2.5 12.6569 2.5 11V9Z"
                    fill="#000000"
                  />
                  <path
                    d="M4 11C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H8C8.55228 9 9 9.44772 9 10C9 10.5523 8.55228 11 8 11H4Z"
                    fill="#000000"
                  />
                  <path
                    d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12V8C5 7.44772 5.44772 7 6 7C6.55228 7 7 7.44772 7 8V12Z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <div className="stat-title text-white">Total Members</div>
              <div className="stat-value text-sky-600">{discordMembers}</div>
              <div className="stat-desc text-gray-500">
                Current Online Members
              </div>
            </div>

            {/* Stat Four
            <div className="stat bg-neutral rounded-2xl">
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
              <div className="stat-title text-white">Page Views</div>
              <div className="stat-value text-stone-400">234</div>
              <div className="stat-desc text-gray-500">Combined Page Views</div>
            </div>
            */}
          </div>

          {/* Stats End*/}
        </div>
      </section>
      {/* Content End */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
