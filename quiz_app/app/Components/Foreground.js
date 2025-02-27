import React, { useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const data = [
    {
      description:
        "Lorem ipsum, dolor sit amet consecter adipisicing elit. Quaerat quam ipsa dolores.",
      size: "2mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      description:
        "Lorem ipsum, dolor sit amet consecter adipisicing elit. Quaerat quam ipsa dolores.",
      size: ".4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "yellow",
      },
    },
    {
      description:
        "Lorem ipsum, dolor sit amet consecter adipisicing elit. Quaerat quam ipsa dolores.",
      size: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "red",
      },
    },
  ];
  return (
    <>
      <div className=" fixed z-[3] top-0 left-0  w-full h-full flex gap-10 flex-wrap p-4">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
