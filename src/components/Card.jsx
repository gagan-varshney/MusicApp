import React from "react";

function Card({data, handleClick, index}) {

    const {image, artist, name, added} = data;

    return (
        <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative mt-10">
            <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover " src={image} alt="" />
            </div>
            <div className="">
                <h3 className="text-xl leading-none font-semibold">{name}</h3>
                <h6 className="text-xs">{artist}</h6>
                <button onClick={()=>handleClick(index)}
                className={`px-4 py-3 ${added ? "bg-teal-600" : "bg-orange-600"} whitespace-nowrap absolute bottom-0 translate-y-[50%] left-1/2 -translate-x-[50%] text-white text-sm rounded-full`}>{added ? "Added" : "Add To Favourites"}</button>
            </div>
            
        </div>
        
    )
}

export default Card;