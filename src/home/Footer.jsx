import HomeIcon from "../assets/HomeIcon";
import SquarePlus from "../assets/SquarePlus";
import Discover from "../assets/Discover";
import ChatBubble from "../assets/ChatBubble";
import User from "../assets/User";

const Footer = () => {
  return (
    <footer className="bg-black h-full">
      <main className="px-2.5 py-2 absolute left-0 right-0 bottom-0 flex justify-between items-center">
        {/* Home/Discover */}
        <div className="flex items-center gap-x-5">
          <button className="text-[#f5e2cb] text-sm grid place-items-center leading-4">
            <HomeIcon />
            Home
          </button>
          <button className="text-[#f5e2cb] text-sm grid place-items-center leading-4">
            <Discover />
            Discover
          </button>
        </div>
        <button className="text-white">
          <SquarePlus />
        </button>
        {/* Inbox/Profile */}
        <div className="flex items-center gap-x-5">
          <button className="text-[#f5e2cb] text-sm grid place-items-center leading-4">
            <ChatBubble />
            Inbox
          </button>
          <button className="text-[#f5e2cb] text-sm grid place-items-center leading-4">
            <User />
            Profile
          </button>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
