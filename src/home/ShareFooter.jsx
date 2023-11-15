import { FaFlag } from "react-icons/fa6";
import { RiDislikeFill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { FaClosedCaptioning } from "react-icons/fa6";
import { RiPassPendingFill } from "react-icons/ri";
import { MdOutlineAddToHomeScreen } from "react-icons/md";
import { TbBrandSpeedtest } from "react-icons/tb";
import { MdOutlineWallpaper } from "react-icons/md";
import { MdOutlineGif } from "react-icons/md";

const ShareFooter = () => {
  return (
    <div className="mt-1 py-1 pr-4 text-xs flex overflow-x-auto scrollbar-hide">
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-slate-200 w-11 h-11 grid place-items-center rounded-full">
          <FaFlag className="w-5 h-5 fill-slate-800" />
        </button>
        <p className="mt-0.5 text-center leading-3">Report</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-slate-200 w-11 h-11 grid place-items-center rounded-full">
          <RiDislikeFill className="w-5 h-5 fill-slate-800" />
        </button>
        <p className="mt-0.5 text-center leading-3">Not Interested</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-slate-200 w-11 h-11 grid place-items-center rounded-full">
          <FaDownload className="w-5 h-5 fill-slate-800" />
        </button>
        <p className="mt-0.5 text-center leading-3">Save video</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-slate-200 w-11 h-11 grid place-items-center rounded-full">
          <FaQuestionCircle className="w-5 h-5 fill-slate-800" />
        </button>
        <p className="mt-0.5 text-center leading-3">Why this video</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-slate-200 w-11 h-11 grid place-items-center rounded-full">
          <FaClosedCaptioning className="w-5 h-5 fill-slate-800" />
        </button>
        <p className="mt-0.5 text-center leading-3">Turn on captions</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-slate-200 w-11 h-11 grid place-items-center rounded-full">
          <RiPassPendingFill className="w-5 h-5 fill-slate-800" />
        </button>
        <p className="mt-0.5 text-center leading-3">Duet</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-slate-200 w-11 h-11 grid place-items-center rounded-full">
          <MdOutlineAddToHomeScreen className="w-5 h-5 fill-slate-800" />
        </button>
        <p className="mt-0.5 text-center leading-3">Stitch</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-slate-200 w-11 h-11 grid place-items-center rounded-full">
          <TbBrandSpeedtest className="w-5 h-5 fill-slate-800 stroke-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Playback speed</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-slate-200 w-11 h-11 grid place-items-center rounded-full">
          <MdOutlineWallpaper className="w-5 h-5 fill-slate-800 stroke-white" />
        </button>
        <p className="mt-0.5 text-center leading-3">Set as wallpaper</p>
      </article>
      <article className="ml-4 w-12 flex flex-col items-center">
        <button className="bg-slate-200 w-11 h-11 grid place-items-center rounded-full">
          <MdOutlineGif className="w-9 h-9 fill-slate-800" />
        </button>
        <p className="mt-0.5 text-center leading-3">Share as GIF</p>
      </article>
    </div>
  );
};

export default ShareFooter;
