import React from "react";

const page = () => {
  return (
    <div className="relative w-full h-screen bg-slate-950">
      <div className="w-full h-50 py-12  flex justify-center text-zinc-400 font-semibold tracking-wide text-lg">
        Documnets
      </div>
      <h1 className="absolute top-1/2  left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-400 text-[15vw] tracking-tight leading-none font-semibold ">
        Docs.
      </h1>
    </div>
  );
};

export default page;
