"use client";

import TiltCard from "@/components/Hero/TiltCard";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaRegHandPaper } from "react-icons/fa";
import Loader from "@/components/Loader";

/**
 * @typedef {import("@prismicio/client").Content.BentoSlice} BentoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BentoSlice>} BentoProps
 * @param {BentoProps}
 */
const Bento = ({ slice }) => {
  const [loading, setLoading] = useState(true);
  const textRef = useRef(null);

  useEffect(() => {
    setLoading(false);
    const textElement = textRef.current;

    // Split the text into letters and wrap each letter with a <span>
    const text = textElement.textContent;
    textElement.innerHTML = text
      .split("")
      .map((letter) => `<span class="letter">${letter}</span>`)
      .join("");

    // Animate each letter with stagger
    gsap.from(".letter", {
      duration: 1, // duration of the animation for each letter
      scale: 0, // starting scale
      opacity: 0, // starting opacity
      ease: "elastic.out(1, 0.3)", // easing for a bounce effect
      stagger: 0.1, // delay between each letter animation
    });

    gsap.fromTo(
      ".tilt-card",
      {
        duration: 5,
        opacity: 0,
        scale: 0,
        stagger: 0.5,
        ease: "sine.out",
        force3D: true,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 0.5,
        stagger: 0.5,
        ease: "sine.out",
        force3D: true,
      },
    );

    gsap.to(".border-circle", {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(".text-circle", {
      rotate: -360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });

    // Dynamically import Draggable to avoid SSR issues
    if (typeof window !== "undefined") {
      import("gsap/Draggable")
        .then(({ default: Draggable }) => {
          gsap.registerPlugin(Draggable);

          // Create draggable elements
          Draggable.create(".dragItem", {
            bounds: ".dragBox",
          });
        })
        .catch((error) => console.log("Error loading Draggable:", error));
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="mx-auto mt-[70px] grid w-[95%] grid-cols-3 grid-rows-8 gap-2 pb-5 lg:grid-cols-5 lg:grid-rows-4"
        style={{
          height: `calc(100vh - 70px)`,
        }}
      >
        {slice.primary.main_bento.map((item, index) => (
          // Render the item
          <TiltCard
            key={index}
            className="tilt-card order-1 col-span-3 row-span-4 w-full rounded-xl !shadow-none lg:col-span-2"
          >
            <div className="flex">
              <div className="relative w-[200px] rounded-br-xl bg-mainWhite">
                <Image
                  src="/logos/sul-purple-trans.png"
                  width={300}
                  height={100}
                  className="!-z-[1]"
                />
                <div
                  className="absolute left-20 top-7 -z-[1] h-[30px] w-[80px]"
                  style={{
                    background: "rgba(128,0,255, 1) !important",
                  }}
                />
              </div>
              <div
                className="-z-[2] w-full rounded-t-xl"
                style={{
                  background: "rgba(128,0,255, 1) !important",
                }}
              />
            </div>
            <div
              style={{
                background: "rgba(128,0,255, 1) !important",
              }}
              className="h-full rounded-xl !rounded-tr-none"
            >
              <div className="absolute right-2 w-2/3 rounded-full border-4 p-4 sm:w-1/2 md:top-2 lg:top-10 lg:w-2/3">
                <PrismicNextImage field={item.image} className="rounded-full" />
              </div>
              <div className="absolute bottom-[40px] left-2 w-[100px] space-y-2 lg:w-full">
                <h1
                  className="inline !w-[100px] text-balance text-2xl font-bold uppercase text-transparent sm:text-4xl lg:w-full lg:text-6xl"
                  style={{
                    background: `rgb(160,255,255)`,
                    background: `linear-gradient(146deg, rgba(160,255,255,1) 1%, rgba(22,207,207,1) 23%, rgba(155,255,255,1) 48%, rgba(22,207,207,1) 91%, rgba(49,252,252,1) 100%)`,
                    backgroundClip: "text",
                  }}
                >
                  {item.title}
                </h1>{" "}
                <br />
                <PrismicNextLink
                  field={item.email}
                  className="!inline cursor-pointer border-b-2 border-dashed text-white duration-200 hover:border-transparent"
                />
              </div>
              <div className="border-circle absolute bottom-5 right-2 rounded-full border-2 border-dashed p-2 duration-200 hover:scale-110">
                <div
                  href="#"
                  className="relative h-20 w-20 rounded-full bg-blue-200"
                >
                  <a href="#">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      className="text-circle text-sm tracking-[2px] text-white"
                    >
                      <path
                        id="circlePath"
                        d="M40,40 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0"
                        fill="transparent"
                      />
                      <text>
                        <textPath
                          href="#circlePath"
                          startOffset="50%"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="#0000ff"
                        >
                          Get in Touch with us.
                        </textPath>
                      </text>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
        <div
          className="order-2 col-span-3 flex items-center justify-center text-center text-4xl font-bold tracking-widest sm:text-6xl md:text-7xl xl:text-8xl"
          style={{
            fontVariant: "small-caps",
          }}
          contentEditable
          ref={textRef}
        >
          {slice.primary.tagline}
        </div>
        {slice.primary.embed.map((item) => (
          // Render the item
          <TiltCard className="tilt-card relative order-3 col-span-2 row-span-2">
            <div className="dragBox group absolute inset-0 h-full w-full rounded-xl">
              <PrismicNextImage
                field={item.image_to_show}
                className="inset-0 h-full w-full rounded-xl object-cover"
              />
              <span
                className="dragItem hover:scale-120 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-transparent p-10 text-white duration-200 group-hover:scale-110"
                style={{
                  backdropFilter: `blur(8px)`,
                  background: `linear-gradient(270deg, rgba(255,255,255,0.2), rgba(255,255,255,0.65))`,
                  backgroundSize: "10px",
                }}
              >
                <FaRegHandPaper />
              </span>
            </div>
          </TiltCard>
        ))}
        {slice.primary.mutli_join_bento.map((item, index) => (
          // Render the item
          <TiltCard
            className={`tilt-card ${index == 0 ? "swapColContainer order-4 col-span-1 row-span-2 flex flex-col" : "swapRowContainer order-6 col-span-2 row-span-1 flex"}`}
          >
            <div className="square flex flex-1 flex-col items-center justify-center bg-accent-secondary text-white">
              <h2 className="text-base font-bold md:text-xl lg:text-3xl">
                {item.main_text}
              </h2>
              <span className="text-sm lg:text-base">{item.sub_text}</span>
            </div>
            <div className="square flex flex-1 flex-col items-center justify-center bg-teal-secondary text-purple-800">
              <h2 className="text-base font-bold md:text-xl lg:text-3xl">
                {item.main_text_2}
              </h2>
              <span className="text-sm lg:text-base">{item.sub_text_2}</span>
            </div>
          </TiltCard>
        ))}
        <TiltCard className="tilt-card relative order-5 col-span-1 row-span-1 rounded-xl">
          <PrismicNextImage
            field={slice.primary.image_bento}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </TiltCard>
      </section>
    </>
  );
};

export default Bento;
