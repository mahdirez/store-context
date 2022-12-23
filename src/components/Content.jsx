import React, { useContext } from "react";
import { Context } from "./Context";
import { Link } from 'react-router-dom'

function Content() {
  const [data, setData] = useContext(Context);
  return (
    <div className="flex flex-wrap justify-around gap-1 p-20">
      {data.map((product) => {
      return <div className="w-full xl:w-1/4  border-solid border-2 border-slate-300 rounded-lg flex flex-col items-center gap-5 p-2">
         <img src={product.images[0]} className="w-full h-60 object-contain"/>
         <Link to={`/product/${product.id}`}><h1 className="hover:text-indigo-600">{product.title}</h1></Link>
         <p>قیمت:{product.price}</p>
        <Link to={`/product/${product.id}`}> <button className="bg-indigo-600 text-white p-2 rounded"> دیدن جزییات محصول  </button></Link>
      </div>
      })}
    </div>
  );
}

export default Content;
