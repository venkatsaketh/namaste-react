import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-500 border-b-2 text-left"
        >
          <div className="pb-1 flex justify-between">
            <div className="w-9/12">
              <span>{item.card.info.name} </span>
              <br />
              <span>₹ {item.card.info.price / 100}</span>
              <p className="text-xs my-2 mr-2">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              {item.card.info.imageId ? (
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-28 rounded-md"
                />
              ) : null}
              <div className="">
                <button className="py-1 px-8 mt-1 text-sm border border-gray-400 bg-white text-green-600 rounded-md">
                  Add+
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
