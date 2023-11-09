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

  const handleDisplayIcon = (e) => {
    setText(e.target.value)
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
      <AddNewComment text={text} handleDisplayIcon={handleDisplayIcon}/>
    </section>
  );
};

export default CommentsContainer;
