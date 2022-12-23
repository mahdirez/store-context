import React, { useContext } from "react";
import { Context } from "./Context";

function Cart() {
  const [data, setData, handleAddCart, cart] = useContext(Context);
  console.log(cart);
  return (
    <div>
      {cart.map((items) => {
        return (
          <div className="flex items-center p-20">
            <div className="w-1/4">
              <img src={items.images[0]} className="w-full" />
            </div>
            <div className="w-3/4 flex flex-col gap-5">
              <h1 className="text-3xl">{items.title}</h1>
              <span className="text-slate-400">{items.description}</span>
              <p className="text-xl w-3/4">{items.content}</p>
              <button
                className="bg-indigo-600 text-white p-2 rounded w-1/4"
                onClick={() => handleAddCart(items.id)}
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
