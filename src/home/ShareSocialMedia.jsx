import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { RiMessengerLine } from "react-icons/ri";
import { LuLink } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ShareSocialMedia = () => {
  return (
    <div className="mt-2 py-1 pr-4 text-xs flex overflow-x-auto scrollbar-hide">
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-yellow-500/80 w-11 h-11 grid place-items-center rounded-full">
          <HiMiniArrowPathRoundedSquare className="w-7 h-7 fill-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Repost</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-gradient-to-t from-[#f58529] via-[#dd2a7b] to-[#8134af] w-11 h-11 grid place-items-center rounded-full">
          <FaInstagram className="w-7 h-7 fill-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Instagram</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-[#08a0e9] w-11 h-11 grid place-items-center rounded-full">
          <SiTwitter className="w-6 h-6 fill-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Twitter</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-gradient-to-t from-[#f58529] via-[#dd2a7b] to-[#8134af]  w-11 h-11 grid place-items-center rounded-full">
          <RiMessengerLine className="w-6 h-6 fill-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Instagram Direct</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-indigo-500 w-11 h-11 grid place-items-center rounded-full">
          <LuLink className="w-6 h-6 stroke-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Copy link</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-indigo-600 w-11 h-11 grid place-items-center rounded-full">
          <FaDiscord className="w-6 h-6 fill-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Discord</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-blue-400 w-11 h-11 grid place-items-center rounded-full">
          <FaTelegramPlane className="w-6 h-6 fill-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Telegram</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-green-500 w-11 h-11 grid place-items-center rounded-full">
          <RiMessage3Fill className="w-6 h-6 fill-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Messages</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-blue-400 w-11 h-11 grid place-items-center rounded-full">
          <MdEmail className="w-6 h-6 fill-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Email</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-blue-600 w-11 h-11 grid place-items-center rounded-full">
          <FaFacebookF className="w-6 h-6 fill-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Facebook</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-blue-500/80 w-11 h-11 grid place-items-center rounded-full">
          <HiOutlineDotsHorizontal className="w-6 h-6 stroke-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">More</p>
      </article>
    </div>
  );
};

export default ShareSocialMedia;
