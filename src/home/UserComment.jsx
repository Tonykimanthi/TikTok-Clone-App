import CommentItem  from "./CommentItem";

const UserComment = ({ commentsList }) => {
  
  return (
    <>
      {commentsList.map((comment, index) => (
        <CommentItem key={index} comment={comment}/>
      ))}
    </>
  );
};

export default UserComment;
