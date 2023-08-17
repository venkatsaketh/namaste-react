import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data, json;
    try {
      data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.839509134536227&lng=78.01685102283955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        {}
      );
      json = await data.json();
    } catch (e) {
      console.log(e.message);
    }
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineState = useOnlineStatus();
  if (onlineState === false) return <h1>Looks!! like you're offline</h1>;

  const Search = (e) => {
    setSearch(e.target.value);
  };

  function topRes() {
    let x = listOfRestaurants.filter((res) => res.info.avgRating >= 4.0);
    setFilteredRes(x);
  }

  function allRes() {
    setFilteredRes(listOfRestaurants);
  }

  return (!listOfRestaurants || listOfRestaurants.length) === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="Search m-4 p-4">
          <input
            type="text"
            className="px-3 py-1 rounded-md border border-solid border-black"
            value={searchText}
            onChange={Search}
          />
          <button
            className="px-4 py-1 mx-4 bg-green-200 rounded-lg"
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
          <button
            className="px-4 py-1 mx-4 bg-gray-400 rounded-lg"
            onClick={topRes}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-1 mx-4 bg-gray-400 rounded-lg"
            onClick={allRes}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
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
