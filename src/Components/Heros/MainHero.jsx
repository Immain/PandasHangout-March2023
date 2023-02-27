import { RiDiscordFill } from "react-icons/ri";

const MainHero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-hero">
        <div className="hero-content text-center">
          <div className="max-w-md space-y-5">
            <h1 className="text-3xl font-bold text-green-400">
              Gaming at Panda's Hangout
            </h1>
            <h1 className="text-6xl font-bold text-white">Let's Play</h1>
            <p className="py-6 text-white text-md font-bold">
              We are a community of gamers who love to play games together. We
              have a wide variety of games to play and we are always looking for
              new games to add to our library. We hope you will join us and
              become a part of our community here at Panda's Hangout and make
              new friends.
            </p>
            <div>
            <a href="https://discord.gg/AADtzrDMNa">
            <button className="btn text-black bg-green-400 hover:bg-green-600">
              <RiDiscordFill size={30} className="mx-1" />
              Join Our Discord
            </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
