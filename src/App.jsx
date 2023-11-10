import Home from "./home/Home";
import CommentsContainer from "./home/CommentsContainer";
import { useState } from "react";

function App() {
  const [showComments, setShowComments] = useState(false);
  const [text, setText] = useState("");
  const [userComment, setUserComment] = useState([
    {
      imgURL:
        "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw=",
      userName: "Tony Km",
      commentDesc: "I created it using React.",
      timeElapsed: "18h",
    },
    {
      imgURL:
        "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw=",
      userName: "Fred Okello",
      commentDesc: "React is easy to learn",
      timeElapsed: "8h",
    },
  ]);

  const handleAddComment = () => {
    if (text) {
      const currentTime = new Date();
      const elapsedTime = calcTimeElapsed(currentTime);
      setUserComment((comments) => [
        {
          imgURL:
            "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw=",
          userName: "Tony Km",
          commentDesc: text,
          timeElapsed: elapsedTime,
        },
        ...comments,
      ]);
      setText("");
    }
  };
  const handleShowComments = () => {
    setShowComments(!showComments);
  };
  const handleDisplayIcon = (e) => {
    setText(e.target.value);
  };

  const calcTimeElapsed = (currentTime) => {
    const timeDiff = new Date() - currentTime;
    const secs = Math.floor(timeDiff / 1000);
    const mins = Math.floor(secs / 60);
    const hrs = Math.floor(mins / 60);
    if (hrs > 0) {
      return hrs + "h";
    } else if (mins > 0) {
      return mins + "m";
    } else {
      return secs + "s";
    }
  };

  return (
    <>
      <h1 className="text-3xl text-teal-600 text-center font-bold mt-3">
        Tiktok Clone App
      </h1>
      <div className="bg-white mt-3 w-11/12 max-w-xs h-[85vh] rounded overflow-hidden relative">
        <Home showComments={showComments} handleShowComments={handleShowComments} userComment={userComment}/>
        <CommentsContainer showComments={showComments} handleShowComments={handleShowComments} userComment={userComment} handleAddComment={handleAddComment} text={text} handleDisplayIcon={handleDisplayIcon}/>
      </div>
    </>
  );
}

export default App;
