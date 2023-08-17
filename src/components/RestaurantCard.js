import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;

  return (
    <div className="p-4 m-4 w-[250px] h-96 bg-gray-100 rounded-lg hover:bg-gray-300">
      <img className="rounded-2xl" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="pb-2">{cuisines.join(", ")}</h4>
      <h4 className="pb-2">{avgRating}</h4>
      <h4 className="pb-2">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
