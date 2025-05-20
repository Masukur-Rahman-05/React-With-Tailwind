import React from "react";
import "../index.css";

export const Aspect = () => {
  return (
    <div className="flex justify-center items-center  w-[500px] h-[400px] border-black border-2">
      <iframe
        // width="560"
        // height="315"
        className="aspect-retro "
        src="https://www.youtube.com/embed/X0AM5-YBJuU?si=afM55t3Y0ykCIC3L"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
