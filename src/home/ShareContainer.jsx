import { HiOutlineX } from "react-icons/hi";
import ShareUser from "./ShareUser";
import ShareSocialMedia from "./ShareSocialMedia";
import ShareFooter from "./ShareFooter";

const ShareContainer = ({share, handleShowShare}) => {
  return (
    <section className={`bg-white py-2 absolute bottom-0 top-[14rem] left-0 right-0 ${share?"translate-y-0" : "translate-y-full"} transition duration-300 rounded-t-md`}>
      <h2 className="text-center font-medium">Share to</h2>
      <HiOutlineX className="share absolute top-2.5 right-2.5 hover:scale-110 transition cursor-pointer stroke-[2.5px] text-lg" onClick={handleShowShare}/>
      <ShareUser />
      <small className="border-b border-slate-100 block mx-auto mt-0.5 w-11/12"></small>
      <ShareSocialMedia />
      <ShareFooter />
    </section>
  );
};

export default ShareContainer;
