import { Link } from "react-router-dom";
const Header = () => {
    return(
      <div className="mt-4 flex flex-wrap justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img  className="w-48" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 gap-6">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  };

  export default Header;
  