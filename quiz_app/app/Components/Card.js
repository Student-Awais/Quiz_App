import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        className=" relative flex-shrink-0 w-36 h-48 bg-slate-600 rounded-3xl p-4 text-zinc-200 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-[10px] tracking-wide leading-3 font-semibold mt-2">
          {data.description}
        </p>
        <div className=" footer absolute bottom-0 h-14 w-full left-0 ">
          <div className="text-slate-950 flex justify-between items-center px-4 mb-2 ">
            <h5 className="font-semibold text-[12px] text-zinc-200">
              {data.size}
            </h5>

            <span>
              {data.close ? (
                <IoIosCloseCircle color="#DFE4E3" />
              ) : (
                <MdDownloadForOffline color="#DFE4E3" />
              )}
            </span>
          </div>
          {data.tag.isOpen ? (
            <div
              className={`w-full h-8 text-center flex justify-center items-center bg-${data.tag.tagColor}-500 h-6`}
            >
              <h3 className="text-slate-950 font-semibold text-[12px] ">
                {data.tag.tagTitle}
              </h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
