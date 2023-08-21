import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState();
  if (!resData || resData.length === 0)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  const { name, cuisines } = resData?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-6">{name}</h1>
      <h4 className="font-semibold text-lg mb-3">{`cuisines - ${cuisines.join(
        ", "
      )}`}</h4>
      {/*categories accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          setIndex={(ind) => setShowIndex(ind)}
          index={index}
          showItems={index === showIndex ? true : false}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
