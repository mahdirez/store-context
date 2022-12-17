import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./Context";

function Details() {
  const [data, setData] = useContext(Context);
  const [countImg , setCountImg] = useState(0);
  const { id } = useParams();

  const info = data.filter((item) => {
    return item.id === id;
  });
  return (
    <div>
      {info.map((items) => {
        return (
          <div className="flex items-center p-20">
            <div className="w-1/4">
              <img src={items.images[countImg]} className='w-full' />
            </div>
            <div className="w-3/4 flex flex-col gap-5">
              <h1 className="text-3xl">{items.title}</h1>
              <span className="text-slate-400">{items.description}</span>
              <p className="text-xl w-3/4">{items.content}</p>
              <div>
                {items.images.map((img,index) => {
                  return (
                    <button
                      className={`w-32 h-32 mx-2`}
                    ><img src={img}  onClick={()=>setCountImg(index)}/></button>
                  );
                })}
              </div>
              <p>قیمت:{items.price}</p>
              <button className="bg-indigo-600 text-white p-2 rounded w-1/4">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Details;
