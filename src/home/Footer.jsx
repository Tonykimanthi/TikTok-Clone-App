import HomeIcon from "../assets/HomeIcon";
import SquarePlusIcon from "../assets/SquarePlusIcon";
import DiscoverIcon from "../assets/DiscoverIcon";
import ChatBubbleIcon from "../assets/ChatBubbleIcon";
import UserIcon from "../assets/UserIcon";
import VideoTimeline from "./VideoTimeline";

const Footer = () => {
  return (
    <footer className="bg-black h-full">
      <main className="px-2.5 py-2 absolute left-0 right-0 bottom-0 flex justify-between items-center">
        {/* Home/Discover */}
        <div className="flex items-center gap-x-5">
          <button className="text-[#f5e2cb] text-sm grid place-items-center leading-4 hover:text-[#e9c08b] transition">
            <HomeIcon />
            Home
          </button>
          <button className="text-[#f5e2cb] text-sm grid place-items-center leading-4 hover:text-[#e9c08b] transition">
            <DiscoverIcon />
            Discover
          </button>
        </div>
        <button className="text-white">
          <SquarePlusIcon />
        </button>
        {/* Inbox/Profile */}
        <div className="flex items-center gap-x-5">
          <button className="text-[#f5e2cb] text-sm grid place-items-center leading-4 hover:text-[#e9c08b] transition">
            <ChatBubbleIcon />
            Inbox
          </button>
          <button className="text-[#f5e2cb] text-sm grid place-items-center leading-4 hover:text-[#e9c08b] transition">
            <UserIcon />
            Profile
          </button>
        </div>
        <VideoTimeline />
      </main>
    </footer>
  );
};

export default Footer;
