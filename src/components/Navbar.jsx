import React from "react";
import Style from "./style.module.css";

function Navbar({data, bellIconClick}) {

    return (
        <div className="w-full px-10 py-3 flex justify-between items-center bg-zinc-600">
            <h3 className={`${Style.a}`}><a href="">Orange</a></h3>
            <h3 className="text-sm text-white relative ml-[70%]"><a href="">about</a></h3>
            <h3 className="text-white text-sm"><a href="">Contact</a></h3>
            <h3 className="text-white text-sm"><a href="">Help</a></h3>
            <div className="flex p-2 bg-orange-600 text-white rounded-md text-sm gap-3">
                <h3>Favourates</h3>
                <h4>{data.filter(item => item.added).length}</h4>
            </div>
            <div className="w-8 h-8 flex ">
                <img src="https://cdn-icons-png.flaticon.com/128/1827/1827312.png" alt="" onClick={bellIconClick} />
            </div>
        </div>
    )
}

export default Navbar;