import HeartIcon from "../assets/HeartIcon";
import { useState } from "react";

const LikeComment = () => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const heartIconSize = "w-4 h-4";
  const handleLike = () => {
    setLike(!like);
    if(!like){
        setLikeCount(likeCount + 1);
    }else{
        setLikeCount(likeCount - 1);
    }
  };

  return (
    <span className="flex items-center gap-x-1">
      <HeartIcon
        heartIconSize={heartIconSize}
        handleLike={handleLike}
        like={like}
      />
      <small className={`${like?"opacity-100":"opacity-0"}`}>{likeCount}</small>
    </span>
  );
};

export default LikeComment;
