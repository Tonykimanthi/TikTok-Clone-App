import { useEffect, useState } from "react";
import NameCaption from "./NameCaption";
import SidePanel from "./SidePanel";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

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
    {
      userVideoURL:
        "https://assets.mixkit.co/videos/preview/mixkit-dashboard-of-a-car-72-large.mp4",
      userImgURL:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      userName: "Luca",
      Caption:
        "Driving in the city traffic.",
    },
    {
      userVideoURL:
        "https://assets.mixkit.co/videos/preview/mixkit-computer-hacker-logging-a-website-with-code-47321-large.mp4",
      userImgURL:
        "https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.webp?b=1&s=170667a&w=0&k=20&c=CfaVabgMcwwc-ijzVAxNs_Sz6q3JVPJnlQ-Py-dpuAQ=",
      userName: "TNY",
      Caption:
        "Coding tips",
    },
  ]);
  const handleNextFeed = (e) => {
    if (e.key === "ArrowDown") {
      setFeedCount(prevCount => (prevCount + 1) % feeds.length);
      setOnPause(false);
    }else if(e.key === "ArrowUp"){
      setFeedCount(prevCount =>  prevCount === 0 ? feeds.length - 1 : prevCount - 1);
      setOnPause(false);
    }
  };

  useEffect(() => {
    const videoEl = videoRef.current;

    if (!videoEl) {
      return;
    }

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
        <motion.video
          key={feedCount}
          ref={videoRef}
          className="w-full h-full cursor-pointer"
          autoPlay
          muted
          loop
          onClick={handlePause}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ease: "easeOut", duration: 0.2}}
        >
          <source src={feeds[feedCount].userVideoURL} type="video/mp4" />
        </motion.video>
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
