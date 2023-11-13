import Header from "./Header";
import Feed from "./Feed";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

const Home = ({ showComments, handleShowComments, commentsList }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [onPause, setOnPause] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(videoEl.currentTime);
    };
    const handleTimeDuration = () => {
      setDuration(videoEl.duration);
    };
    videoEl.addEventListener("timeupdate", handleTimeUpdate);
    videoEl.addEventListener("durationchange", handleTimeDuration);

    return () => {
      videoEl.removeEventListener("timeupdate", handleTimeUpdate);
      videoEl.removeEventListener("durationchange", handleTimeDuration);
    };
  }, []);

  const handlePause = () => {
    const videoEl = videoRef.current;
    setOnPause(!onPause);
    if (!onPause) {
      videoEl.pause();
    } else {
      videoEl.play();
    }
  };

  return (
    <>
      <Header />
      <Feed
        showComments={showComments}
        handleShowComments={handleShowComments}
        commentsList={commentsList}
        videoRef={videoRef}
        onPause={onPause}
        handlePause={handlePause}
      />
      <Footer currentTime={currentTime} duration={duration} />
    </>
  );
};

export default Home;
