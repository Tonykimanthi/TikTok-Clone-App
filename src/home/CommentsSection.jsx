import XmarkIcon from "../assets/CloseCommentsIcon";
import PrimaryComment from "./PrimaryComment";

const Comments = () => {
  return (
    <section className="bg-white p-2 absolute bottom-0 top-40 left-0 right-0">
      <header className="flex justify-center items-center">
        <h2 className="font-medium">
          <span className="mr-1">0</span>comments
        </h2>
        <XmarkIcon />
      </header>
      <main className="mt-4">
        <PrimaryComment />
      </main>
    </section>
  );
};

export default Comments;
