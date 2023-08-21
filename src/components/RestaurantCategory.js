import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setIndex, index }) => {
  //   console.log(data);
  const handleClick = () => {
    showItems ? setIndex(null) : setIndex(index);
  };
  return (
    <div className="w-6/12 mx-auto my-6 bg-gray-50 p-4 shadow-md">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>
      {/* Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
