import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
      </div>
      <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>  
          </ul>
      </div>
    </div>
  
}

const RestaurantCard = ({resName,cuisine}) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
      className="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 star</h4>
      <h4>38 mins</h4>
    </div>
  )
};
const Body = () => {
  return (
    <div className="body">
        <div className="Search">Search</div>
        <div className="res-container">
             <RestaurantCard resName="Meghana" cuisine="Biryani"/>
             <RestaurantCard resName="KFC" cuisine="Burger"/>
        </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="app">
       <Header/>
       <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);