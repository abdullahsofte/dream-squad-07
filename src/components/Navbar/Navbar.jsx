import Logo from "../../assets/img/logo.png";
import { TbCoinFilled } from "react-icons/tb";
import PropTypes from "prop-types";

const Navbar = ({ coin }) => {
  return (
    <div className="navbar bg-base-100 py-4">
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
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <a className=" text-xl">
          <img src={Logo} alt="Logo" className="w-20" />
        </a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <a className="text-gray-600 font-semibold text-xl hover:text-yellow-600">
              Home
            </a>
          </li>
          <li>
            <a className="text-gray-600 font-semibold text-xl hover:text-yellow-600">
              Fixture
            </a>
          </li>
          <li>
            <a className="text-gray-600 font-semibold text-xl hover:text-yellow-600">
              Teams
            </a>
          </li>
          <li>
            <a className="text-gray-600 font-semibold text-xl hover:text-yellow-600">
              Schedules
            </a>
          </li>
        </ul>
      
        <div className="flex gap-2 px-5 py-4 border rounded-xl items-center">
          <p className="text-xl font-semibold text-yellow-600">{coin} Coin</p>
          <TbCoinFilled className="text-yellow-500 text-2xl" />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  coin: PropTypes.number.isRequired,
};

export default Navbar;
