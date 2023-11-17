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
        "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4",
      userImgURL:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
      userName: "Net Ninja",
      Caption: "React part 22 | LIKE and follow for more tips & tricks!🤟",
    },
    {
      userVideoURL:
        "https://assets.mixkit.co/videos/preview/mixkit-computer-code-running-on-a-screen-10325-large.mp4",
      userImgURL:
        "https://plus.unsplash.com/premium_photo-1663054500009-d4fc1a8ad953?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWN0fGVufDB8fDB8fHww",
      userName: "React",
      Caption: "Super React JS",
    },
    {
      userVideoURL:
        "https://assets.mixkit.co/videos/preview/mixkit-html-code-on-a-dark-background-45378-large.mp4",
      userImgURL:
        "https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWN0fGVufDB8fDB8fHww",
      userName: "Richard Oliver Bray",
      Caption:
        "How to get data from an API in React. #webdev #react #javascript",
    },
  ]);

  const handleNextFeed = (e) => {
    if (e.key === "ArrowDown") {
      setFeedCount((prevCount) => (prevCount + 1) % feeds.length);
      setOnPause(false);
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
      <NameCaption feeds={feeds} feedCount={feedCount} />
      <SidePanel
        showComments={showComments}
        handleShowComments={handleShowComments}
        commentsList={commentsList}
        handleShowShare={handleShowShare}
        feeds={feeds}
        feedCount={feedCount}
      />
    </main>
  );
};

export default Feed;
