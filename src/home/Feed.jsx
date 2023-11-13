import NameCaption from "./NameCaption";
import SidePanel from "./SidePanel";
import { FaPlay } from "react-icons/fa";

const Feed = ({ showComments, handleShowComments, commentsList, videoRef, onPause, handlePause }) => {
  return (
    <main className="h-[72%] relative bg-black">
      <video ref={videoRef} className="w-full h-full cursor-pointer" autoPlay muted loop onClick={handlePause}>
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4"
          type="video/mp4"
        />
      </video>
      <FaPlay className={`${onPause ? '' : 'hidden'} text-white absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4`} />
      <NameCaption />
      <SidePanel
        showComments={showComments}
        handleShowComments={handleShowComments}
        commentsList={commentsList}
      />
    </main>
  );
};

export default Feed;
