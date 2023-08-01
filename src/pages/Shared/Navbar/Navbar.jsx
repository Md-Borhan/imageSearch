import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="fixed z-10 text-white navbar bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-inner shadow-[#ffffff8e] rounded-md">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case mt-3 text-xl hidden sm:block"
          >
            HomePage
          </Link>
        </div>
        <div className="flex-none space-x-7">
          <Link to="/login">Login</Link>
          <Link
            to="/"
            className="btn btn-sm border bg-transparent text-white hover:text-black border-white"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
