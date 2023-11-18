import Home from "./home/Home";
import CommentsContainer from "./home/CommentsContainer";
import ShareContainer from "./home/ShareContainer";
import { useState } from "react";

function App() {
  const [showComments, setShowComments] = useState(false);
  const [text, setText] = useState("");
  const [share, setShare] = useState(false);
  const [commentsList, setCommentsList] = useState([
    {
      imgURL:
        "https://images.unsplash.com/photo-1630208232589-e42b29428b19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      userName: "John Michael",
      commentDesc: "You created it using React?",
      timeElapsed: "18h",
    },
    {
      imgURL:
        "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw=",
      userName: "Annah David",
      commentDesc: "React is easy to learn?",
      timeElapsed: "8h",
    },
  ]);

  const handleAddComment = () => {
    if (text) {
      const currentTime = new Date();
      const elapsedTime = calcTimeElapsed(currentTime);
      setCommentsList((comments) => [
        ...comments,
        {
          imgURL:
            "https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.webp?b=1&s=170667a&w=0&k=20&c=CfaVabgMcwwc-ijzVAxNs_Sz6q3JVPJnlQ-Py-dpuAQ=",
          userName: "TNY",
          commentDesc: text,
          timeElapsed: elapsedTime,
        },
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
  const handleShowShare = () => {
    setShare(!share);
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
      <h1 className="text-2xl text-white text-center font-extrabold mt-3">
        Tiktok Clone App
      </h1>
      <div className="bg-white mt-3 w-11/12 max-w-xs h-[85vh] rounded-2xl border-8 border-slate-400 overflow-hidden relative">
        <Home
          showComments={showComments}
          handleShowComments={handleShowComments}
          commentsList={commentsList}
          handleShowShare={handleShowShare}
        />
        <CommentsContainer
          showComments={showComments}
          handleShowComments={handleShowComments}
          commentsList={commentsList}
          handleAddComment={handleAddComment}
          text={text}
          handleDisplayIcon={handleDisplayIcon}
        />
        <ShareContainer share={share} handleShowShare={handleShowShare} />
      </div>
    </>
  );
}

export default App;
