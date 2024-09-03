/* eslint-disable react/no-unescaped-entities */
import logo from "../../../public/logo.png";
const Navbar = () => {
  return (
    <div className="px-3 pt-4 md:px-28 mx-auto navbar bg-gradient-to-l from-[#1C1E53] to-[#151640] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#F47D9E] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>HOME</a>
            </li>

            <li>
              <a>All Course</a>
            </li>
            <li>
              <a>Student Dashboard</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost ">
          <img src={logo} className="w-[55px] h-full " alt="logo" />
          <span className="text-2xl  font-serif font-medium -ml-2">
            Learner<span className="text-[#FD5386]">'</span>s
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>All Course</a>
          </li>
          <li>
            <a>Student Dashboard</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className=" btn btn-outline  px-10 text-white border-[#F47D9E] border-2 hover:border-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
