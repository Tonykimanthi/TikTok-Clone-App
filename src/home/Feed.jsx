import { useEffect, useState } from "react";
import NameCaption from "./NameCaption";
import SidePanel from "./SidePanel";
import { FaPlay } from "react-icons/fa";

const Feed = ({
  showComments,
  handleShowComments,
  commentsList,
  videoRef,
  onPause,
  setOnPause,
  handlePause,
  handleShowShare,
  setCurrentTime,
  setDuration,
}) => {
  const [feedCount, setFeedCount] = useState(0);
  const [feeds, setFeeds] = useState([
    {
      userVideoURL:
        "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4",
      userImgURL:
        "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw=",
      userName: "Net Ninja",
      Caption: "How to get started with React.",
    },
    {
      userVideoURL:
        "https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4",
      userImgURL:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
      userName: "React",
      Caption: "Super React JS",
    },
  ]);

  const handleNextFeed = (e) => {
    if (e.key === "ArrowDown") {
      setFeedCount((prevCount) => (prevCount + 1) % feeds.length);
      setOnPause(false);

      console.log(feedCount);
    }
  };

  useEffect(() => {
    const videoEl = videoRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(videoEl.currentTime);
    };
    const handleTimeDuration = () => {
      setDuration(videoEl.duration);
    };
    window.addEventListener("keydown", handleNextFeed);

    videoEl.addEventListener("timeupdate", handleTimeUpdate);
    videoEl.addEventListener("durationchange", handleTimeDuration);

    return () => {
      window.removeEventListener("keydown", handleNextFeed);
      videoEl.removeEventListener("timeupdate", handleTimeUpdate);
      videoEl.removeEventListener("durationchange", handleTimeDuration);
    };
  }, [feedCount, handleNextFeed]);

  return (
    <main className="h-[72%] relative bg-black">
      <video
        key={feedCount}
        ref={videoRef}
        className="w-full h-full cursor-pointer"
        autoPlay
        muted
        loop
        onClick={handlePause}
      >
        <source src={feeds[feedCount].userVideoURL} type="video/mp4" />
      </video>
      <FaPlay
        className={`${
          onPause ? "" : "hidden"
        } text-white absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4`}
      />
      <NameCaption />
      <SidePanel
        showComments={showComments}
        handleShowComments={handleShowComments}
        commentsList={commentsList}
        handleShowShare={handleShowShare}
      />
    </main>
  );
};

export default Feed;
