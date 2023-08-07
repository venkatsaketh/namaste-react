import RestaurantCard from "./RestaurantCard";
import resList  from "../utils/constants";
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);

    function topRes() {
        let x=listOfRestaurants.filter(res => res.data.avgRating>=4.0)
        setListOfRestaurants(x);
    }

    return (
      <div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={topRes}
            >Top Rated Restaurants
            </button>
          </div>
          <div className="res-container">
            {listOfRestaurants.map(restaurant => {
                  return <RestaurantCard index={restaurant.id} resData = {restaurant}/>
            })}
          </div>
      </div>
    )
  }

  export default Body;