import React from "react";
import Stream1 from "../../../assets/Stream1.png";
import Stream2 from "../../../assets/Stream2.png";

const LiveStream = () => {
  return (
    <div>
      <section className="bg-neutral py-16">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black-400 dark:text-green-400 xxs:text-center lg:text-left">
              LIVE STREAMS
            </h2>
            <h1 className="text-3xl text-white mb-4 tracking-tight font-extrabold xxs:text-center lg:text-left">
              Catch us live on Panda's Hangout for Movie Nights, Game Nights,
              and more!
            </h1>
            <p class="mb-4 text-white xxs:text-center lg:text-left">
              Streaming so fast, you'll enjoy the moment right when it happens.
              Be a part of the show and an all-new chat platform where you can
              upvote your BFF, and give props to support your favorite creators.
              All this is included when you're a member of Panda's Hangout.
            </p>
            <p className="mb-4 text-white xxs:text-center lg:text-left">
              Come join us for our next live stream! We have a lot of fun and
              we'd love to have you there!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <img
              className="w-full rounded-lg shadow-md shadow-green-400"
              src={Stream1}
              alt="Stream1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg shadow-md shadow-green-400"
              src={Stream2}
              alt="Stream2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveStream;
