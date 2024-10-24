"use client";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useEffect } from "react";

const DragStar = ({ className }) => {
 useEffect(() => {
   // Dynamically import Draggable to avoid SSR issues
   if (typeof window !== "undefined") {
     import("gsap/Draggable")
       .then(({ default: Draggable }) => {
         gsap.registerPlugin(Draggable);

         // Create draggable elements
         Draggable.create(".flair--1", {
           type: "x",
           bounds: ".container",
         });

         Draggable.create(".flair--3b", {
           type: "rotation",
         });

         Draggable.create(".flair--4b", {
           bounds: ".container",
         });
       })
       .catch((error) => console.error("Error loading Draggable:", error));
   }
 }, []);

  return (
    <div
      className={`container relative flex h-[90vh] w-[90vw] items-center justify-around rounded-[9px] ${className}`}
    >
      <div>
        <div class="flair flair--1"></div>
      </div>
      <div>
        <div class="flair flair--3b"></div>
      </div>
      <div>
        <div class="flair flair--4b"></div>
      </div>

      <h4 className="pointer-events-none absolute bottom-4 left-0 right-0 w-full text-center">
        Spin us, Drag us...
      </h4>
    </div>
  );
};

export default DragStar;
