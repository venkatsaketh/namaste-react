import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">CART</h1>
      <div className="w-7/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-2xl"
          onClick={handleClear}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>You're Cart is Empty</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
