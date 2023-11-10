import Header from "./Header";
import Feed from "./Feed";
import Footer from "./Footer";

const Home = ({showComments, handleShowComments, userComment}) => {
  return (
    <>
      <Header />
      <Feed showComments={showComments} handleShowComments={handleShowComments} userComment={userComment}/>
      <Footer />
    </>
  );
};

export default Home;
