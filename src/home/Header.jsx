const Header = () => {
  return (
    <header className="bg-black flex justify-between items-center pt-6 px-5">
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
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6 stroke-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
