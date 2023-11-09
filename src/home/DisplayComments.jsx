import DislikeIcon from "../assets/DislikeIcon";
import LikeComment from "./LikeComment";

const PrimaryComment = ({ userComment }) => {
  const dislikeIconSize = "w-4 h-4";

  return (
    <>
      {userComment.map((comment, index) => (
        <li key={index} className="flex gap-x-2">
          <img
            className="w-9 h-9 object-cover rounded-full"
            src={comment.imgURL}
            alt={comment.userName}
          />
          <div className="leading-tight text-sm w-full">
            <h4 className="text-slate-500 font-medium">{comment.userName}</h4>
            <p>{comment.commentDesc}</p>
            <div className="flex justify-between">
              <div className="flex items-center gap-x-4">
                <small>{comment.timeElapsed}</small>
                <button className="text-sm text-slate-500">Reply</button>
              </div>
              <div className="flex items-center gap-x-4">
                <LikeComment />
                <DislikeIcon dislikeIconSize={dislikeIconSize} />
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default PrimaryComment;
