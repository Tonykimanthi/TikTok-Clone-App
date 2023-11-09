import { useState } from "react";
import XmarkIcon from "../assets/CloseCommentsIcon";
import PrimaryComment from "./DisplayComments";
import AddNewComment from "./AddNewComment";

const CommentsContainer = () => {
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

  const handleAddComment = (e) => {
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
    <section className="bg-white p-2 absolute bottom-0 top-40 left-0 right-0">
      <header className="flex justify-center items-center">
        <h2 className="font-medium">
          <span className="mr-1">{userComment.length}</span>comments
        </h2>
        <XmarkIcon />
      </header>
      <main className="mt-4">
        <ul className="space-y-4">
          <PrimaryComment userComment={userComment} />
        </ul>
      </main>
      <AddNewComment
        text={text}
        handleDisplayIcon={handleDisplayIcon}
        handleAddComment={handleAddComment}
      />
    </section>
  );
};

export default CommentsContainer;
