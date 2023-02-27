import { useState } from "react";
import Player from "../../Components/Modules/Player/Player";
import Footer from "../../Navigation/Footer";
import Navbar from "../../Navigation/Navbar";
import NerdCow from "../../assets/NerdCow.png";
import PHGaming from "../../assets/PHGaming.png";
import { TiHeartOutline, TiHeart } from "react-icons/ti";
import { RxShare2 } from "react-icons/rx";
import { GiTwoCoins } from "react-icons/gi";

const Live = () => {
  const [title, setTitle] = useState("Share");
  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://pandashangout.com/live");
    setTitle("Copied!");
    setTimeout(() => {
      setTitle("Share");
    }, 3000);
  };

  const [icon, setIcon] = useState(
    <TiHeartOutline className="inline-flex mx-1" size={20} />
  );
  const changeIcon = () => {
    setIcon(<TiHeart className="inline-flex mx-1 text-red-500" size={20} />);
  };

  const sendMessage = () => {
    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discord.com/api/webhooks/1078134793683873793/qlfF9VKpvLo1vD-U8nqp4PlFR4piB7wNER7U1iZxpUJYJMSJWFd9Fq8CQH5Vw1dby21k"
    );

    request.setRequestHeader("Content-type", "application/json");

    const params = {
      content: `Hey!, ${
        document.getElementById("name").value
      } Liked Your Stream! :heart:`,
    };

    request.send(JSON.stringify(params));
  };

  return (
    <div>
      <Navbar />
      {/* Hero */}
      <div
        className="hero min-h-[40vh] bg-base-200"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-green-400 ">
              Welcome To Live
            </h1>
            <p className="mb-5 text-white">
              This is the hangout stream featuring Panda, PurpleZheep, Co-Hosts
              YMFTS2BB and ChewieBell. You can watch us live on this platform
              (and re-runs when we're not live) at pandashangout.com/live. We
              hope you enjoy the shows, and if you do, we hope you'll share them
              with others.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="text-gray-600 bg-neutral py-16">
        {/* Stream Player */}
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 md:text-sm px-2 lg:space-x-3 md:space-x-3 md:items-center lg:items-center space-y-2">
          <div className="shadow-md shadow-green-500 rounded-2xl">
            <Player url="https://live.pandashangout.com/live/stream/index.m3u8" />
          </div>
        </div>

        {/* Stream Modal */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-green-400">
              Hey, You're Awesome!
            </h3>
            <p className="py-4 text-white">
              Thank you for liking our stream! We really appreciate it, please
              leave us your Twitter or Discord handle so we can say thanks!
            </p>
            <form>
              <input
                type="text"
                id="name"
                placeholder="Twitter or Discord Handle"
                className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none bg-neutral text-white focus:border-green-500"
              />
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Close
                </label>
                <label
                  onClick={() => {
                    sendMessage();
                    changeIcon();
                  }}
                  htmlFor="my-modal"
                  className="btn"
                >
                  Like Stream
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Stream Social Buttons */}
        <div className="flex items-center justify-center space-x-2 pt-4">
          <label
            htmlFor="my-modal"
            className="bg-slate-800 hover:bg-green-400 rounded-2xl text-white py-2 px-4 cursor-pointer"
          >
            {icon} Like Stream
          </label>
          <button className="bg-slate-800 hover:bg-green-400 rounded-2xl text-white py-2 px-4">
            <GiTwoCoins className="inline-flex mx-1" size={20} />
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=D3N6XMB5U6XXE"
              target="_blank"
              rel="noreferrer"
            >
              Tip
            </a>
          </button>
          <button
            onClick={copyToClipboard}
            className="bg-slate-800 hover:bg-green-400 rounded-2xl text-white py-2 px-4"
          >
            <RxShare2 className="inline-flex mx-1" size={20} />
            {title}
          </button>
        </div>
      </section>

      {/* Events */}
      <section className="text-gray-600 bg-neutral py-16">
        <div className="divider max-w-[1240px] mx-auto"></div>
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-center text-xl font-bold text-green-400">
            Welcome To Our Live Events
          </h1>
          <h1 className="text-center text-4xl font-bold text-white">
            See What's Available To You in 2023!
          </h1>
          <p className="text-center text-white">
            We have a lot of events planned for 2023, and we're excited to share
            them with you!
          </p>
        </div>
        <div className="divider max-w-[1240px] mx-auto"></div>
        <div className="w-full bg-neutral py-16 px-4">
          {/* Movie Club */}
          <div className="max-w-[1240px] grid md:grid-cols-2 mx-auto">
            <img
              className="mx-auto my-4 rounded-2xl"
              src="https://inola.okpls.org/wp-content/uploads/2021/08/movie.jpg"
              alt="/"
            />

            <div className="flex flex-col p-5 justify-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl text-center font-bold py-2 text-[#00df9a]">
                Movie Club
              </h1>
              <p className="text-white">
                Join us every 3rd Saturday for Movie Club here at Panda's
                Hangout. We hang out and talk about what we liked and disliked
                about the movie afterwards. After each movie we vote on which
                movie we will watch the next month. Movie Club is completely
                free of charge and the only thing you need to bring is yourself,
                some popcorn, soda, maybe some candy, and hangout. So, sit down
                and silence your cell phones and enjoy the movie!
              </p>
            </div>
          </div>

          {/* Nerd Cow */}
          <div className="max-w-[1240px] grid md:grid-cols-2 mx-auto">
            <img className="mx-auto my-4 rounded-2xl" src={NerdCow} alt="/" />

            <div className="flex flex-col p-5 justify-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl text-center font-bold py-2 text-[#00df9a]">
                Nerd Cow Webcast
              </h1>
              <p className="text-white">
                The Nerd Cow Webcast is a new up and coming online show where
                the crew of Panda's Hangout talks about anything nerdy. This
                ranges from anything about programming, movies, sci-fi material,
                etc. We here at Panda's Hangout are all nerds and we hope that
                you'll nerd out with us as well!
              </p>
            </div>
          </div>

          {/* Pandas Hangout Gaming */}
          <div className="max-w-[1240px] grid md:grid-cols-2 mx-auto">
            <img className="mx-auto my-4 rounded-2xl" src={PHGaming} alt="/" />

            <div className="flex flex-col p-5 justify-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl text-center font-bold py-2 text-[#00df9a]">
                Gaming Streams
              </h1>
              <p className="text-white">
                Welcome to King Panda's Game Stream, a channel full of
                interactive content and positivity, KP is dedicated to streaming
                high-quality and fun content and interacting with our amazing
                viewers! I haven't been streaming long, but have built a small
                community so far. I hope that you find my content enjoyable and
                that you stick around for some fun times!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Live;
