const Header = () => {
  return (
    <header className="bg-black flex justify-between items-center pt-6 pb-0.5 px-3">
      <nav className="font-medium mx-auto space-x-4 text-[#F5E2CB] text-lg">
        <button>Friends</button>
        <button>Following</button>
        <button>For You</button>
      </nav>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
