"use client";

import TiltCard from "@/components/Hero/TiltCard";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { FaPlay } from "react-icons/fa6";

/**
 * @typedef {import("@prismicio/client").Content.BentoSlice} BentoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BentoSlice>} BentoProps
 * @param {BentoProps}
 */
const Bento = ({ slice }) => {
  useEffect(() => {
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
  }, []);

  return (
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
          className="order-1 col-span-3 row-span-4 w-full rounded-xl !shadow-none lg:col-span-2"
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
            <div className="absolute right-2 w-2/3 rounded-full border-4 p-4 sm:w-1/2 md:top-2 lg:w-2/3 lg:top-10">
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
      >
        {slice.primary.tagline}
      </div>
      {slice.primary.embed.map((item) => (
        // Render the item
        <TiltCard className="order-3 col-span-2 row-span-2">
          <PrismicNextLink
            field={item.embed_link}
            className="group relative rounded-xl"
          >
            <PrismicNextImage
              field={item.image_to_show}
              className="h-full w-full rounded-xl object-cover"
            />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent p-4 backdrop-blur duration-200 group-hover:scale-110">
              <FaPlay className="text-lg text-white" />
            </span>
          </PrismicNextLink>
        </TiltCard>
      ))}
      {slice.primary.mutli_join_bento.map((item, index) => (
        // Render the item
        <TiltCard
          className={`${index == 0 ? "order-4 col-span-1 row-span-2 flex flex-col" : "order-6 col-span-2 row-span-1 flex"}`}
        >
          <div className="flex flex-1 flex-col items-center justify-center bg-accent-secondary text-white">
            <h2 className="text-base font-bold md:text-xl lg:text-3xl">
              {item.main_text}
            </h2>
            <span className="text-sm lg:text-base">{item.sub_text}</span>
          </div>
          <div className="bg-teal-secondary flex flex-1 flex-col items-center justify-center text-purple-800">
            <h2 className="text-base font-bold md:text-xl lg:text-3xl">
              {item.main_text_2}
            </h2>
            <span className="text-sm lg:text-base">{item.sub_text_2}</span>
          </div>
        </TiltCard>
      ))}
      <TiltCard className="relative order-5 col-span-1 row-span-1 rounded-xl">
        <PrismicNextImage
          field={slice.primary.image_bento}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </TiltCard>
    </section>
  );
};

export default Bento;
