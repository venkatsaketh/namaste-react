import { useState, useEffect } from "react";
import { useRef } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtn] = useState("Login");
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) console.log("UseEffect Header");
    else didMount.current = true;
  }, [btnName]);
  const onlineState = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="LOGO" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineState ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              if (btnName == "Login") setBtn("Logout");
              else setBtn("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
