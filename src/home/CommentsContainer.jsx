import CloseCommentsIcon from "../assets/CloseCommentsIcon";
import UserComment from "./UserComment";
import NewCommentForm from "./NewCommentForm";

const CommentsContainer = ({showComments, handleShowComments, commentsList, handleAddComment, text, handleDisplayIcon}) => {

  return (
    <section
      className={`bg-white p-2 absolute bottom-0 top-40 left-0 right-0 transition duration-300 ${
        showComments ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <header className="flex justify-center items-center">
        <h2 className="font-medium">
          <span className="mr-1">{commentsList.length}</span>comments
        </h2>
        <CloseCommentsIcon handleShowComments={handleShowComments}/>
      </header>
      <main className="mt-2 h-[17.2rem] overflow-y-auto scrollbar-hide">
        <ul className="flex flex-col-reverse gap-y-2">
          <UserComment commentsList={commentsList} />
        </ul>
      </main>
      <NewCommentForm
        text={text}
        handleDisplayIcon={handleDisplayIcon}
        handleAddComment={handleAddComment}
      />
    </section>
  );
};

export default CommentsContainer;
