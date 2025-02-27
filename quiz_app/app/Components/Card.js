import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

const Card = () => {
  return (
    <>
      <div className=" relative w-36 h-48 bg-slate-600 rounded-3xl p-4 text-zinc-200 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-[10px] tracking-wide leading-3 font-semibold mt-2">
          Lorem ipsum, dolor sit amet consecter adipisicing elit. Quaerat quam
          ipsa dolores.
        </p>
        <div className=" footer absolute bottom-0 h-8 w-full left-0 ">
          <div className="text-slate-950 flex justify-between items-center px-4 ">
            <h5 className="font-semibold text-[12px] text-zinc-200">.4mb</h5>
            <MdDownloadForOffline color="#DFE4E3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
