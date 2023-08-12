import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.839509134536227&lng=78.01685102283955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {}
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const Search = (e) => {
    setSearch(e.target.value);
  };

  function topRes() {
    let x = listOfRestaurants.filter((res) => res.info.avgRating >= 4.0);
    setFilteredRes(x);
  }

  return (!listOfRestaurants || listOfRestaurants.length) === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={Search}
          />
          <button
            className="filter-btn"
            onClick={() => {
              if (!searchText) {
                alert("enter a text");
                return;
              }
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRes(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={topRes}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes?.map((restaurant) => {
          return (
            <Link to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard index={restaurant.info.id} resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
