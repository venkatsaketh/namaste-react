import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);

  if (!resData || resData.length === 0)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  const { name, cuisines } = resData?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{`cuisines - ${cuisines.join(", ")}`}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li>
            {item.card.info.name} {"->"} {"Rs- "}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
