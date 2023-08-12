import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resData, setRes] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let URL =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.839509134536227&lng=78.01685102283955&restaurantId=" +
      resId +
      "&catalog_qa=undefined&submitAction=ENTER";

    const data = await fetch(URL);

    const json = await data.json();
    setRes(json);
  };
  if (resData.length === 0)
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
        {itemCards.map((item) => (
          <li>
            {item.card.info.name} {"->"} {"Rs- "}
            {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
