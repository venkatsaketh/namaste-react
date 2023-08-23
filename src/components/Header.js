import { useState, useEffect } from "react";
import { useRef, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtn] = useState("Login");
  const didMount = useRef(false);

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  useEffect(() => {
    if (didMount.current) console.log("UseEffect Header");
    else didMount.current = true;
  }, [btnName]);
  const onlineState = useOnlineStatus();
  return (
    <div className="flex justify-between bg-green-100 shadow-md">
      <div className="">
        <img className="w-36" src={LOGO_URL} alt="LOGO" />
      </div>
      <div className="nav-items">
        <ul className="flex items-center p-4 m-4">
          <li className="px-4">Online Status : {onlineState ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart ({cartItems?.length})</Link>
          </li>
          <li className="px-4">
            <button
              className="login"
              onClick={() => {
                if (btnName == "Login") setBtn("Logout");
                else setBtn("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
