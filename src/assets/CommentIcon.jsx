const CommentIcon = ({handleShowComments}) => {
  return (
    <svg
      width="35"
      height="35"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 cursor-pointer" onClick={handleShowComments}
    >
      <path d="M21.6 11.2c0 4.64-4.298 8.4-9.6 8.4-.95.002-1.897-.121-2.816-.366-.7.355-2.31 1.036-5.017 1.48-.24.039-.423-.21-.328-.434.425-1.003.809-2.34.924-3.56C3.293 15.246 2.4 13.314 2.4 11.2c0-4.637 4.3-8.4 9.6-8.4 5.302 0 9.6 3.762 9.6 8.4Zm-13.2 0a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0Zm4.8 0a1.2 1.2 0 1 0-2.399 0 1.2 1.2 0 0 0 2.4 0Zm3.6 1.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"></path>
    </svg>
  );
};

export default CommentIcon;
