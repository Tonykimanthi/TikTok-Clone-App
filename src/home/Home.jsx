import Header from "./Header";
import Feed from "./Feed";
import Footer from "./Footer";

const Home = ({showComments, handleShowComments, commentsList}) => {
  return (
    <>
      <Header />
      <Feed showComments={showComments} handleShowComments={handleShowComments} commentsList={commentsList}/>
      <Footer />
    </>
  );
};

export default Home;
