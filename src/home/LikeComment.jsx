import HeartIcon from "../assets/HeartIcon";

const LikeComment = ({ like, likeCount, handleLike }) => {
  return (
    <span className="flex items-center gap-x-1">
      <HeartIcon handleLike={handleLike} like={like} />
      <small className={`${like ? "opacity-100" : "opacity-0"}`}>
        {likeCount}
      </small>
    </span>
  );
};

export default LikeComment;
