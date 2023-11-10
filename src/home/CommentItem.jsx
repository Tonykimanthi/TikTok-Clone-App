import DislikeIcon from "../assets/DislikeIcon";
import LikeComment from "./LikeComment";
import { useState } from "react";

const CommentItem = ({ comment }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const handleLike = () => {
    setLike(!like);
    setDislike(false);
    setLikeCount(!like ? likeCount + 1 : likeCount - 1);
  };
  
  const handleDislike = () => {
    setDislike(!dislike);
    setLike(false);
    setLikeCount(dislike && null);
  };

  return (
    <li className="flex gap-x-2">
      <img
        className="w-9 h-9 object-cover rounded-full"
        src={comment.imgURL}
        alt={comment.userName}
      />
      <div className="leading-tight text-sm w-full max-w-[85%]">
        <h4 className="text-slate-500 font-medium">{comment.userName}</h4>
        <p className="break-words">{comment.commentDesc}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-4">
            <small>{comment.timeElapsed}</small>
            <button className="text-sm text-slate-500">Reply</button>
          </div>
          <div className="flex items-center gap-x-4">
            <LikeComment
              like={like}
              likeCount={likeCount}
              handleLike={handleLike}
            />
            <DislikeIcon dislike={dislike} handleDislike={handleDislike}/>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CommentItem;
