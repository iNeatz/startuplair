import TiltCard from "@/components/Hero/TiltCard";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.BentoSlice} BentoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BentoSlice>} BentoProps
 * @param {BentoProps}
 */
const Bento = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-auto mt-[70px] grid w-[95%] grid-cols-5 grid-rows-4 pb-5"
      style={{
        height: `calc(100vh - 70px)`,
      }}
    >
      {slice.primary.main_bento.map((item, index) => (
        // Render the item
        <TiltCard
          key={index}
          className="col-span-2 row-span-4 w-full rounded-xl !shadow-none"
        >
          <div className="flex">
            <div className="relative w-[200px] rounded-br-xl bg-mainWhite">
              <Image
                src="/logos/sul-purple-trans.png"
                width={300}
                height={100}
                className="!z-[2]"
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
            <div className="absolute right-2 w-2/3 rounded-full border-4 p-4">
              <PrismicNextImage field={item.image} className="rounded-full" />
            </div>
            <h1>{item.title}</h1>
            <PrismicNextLink field={item.email} />
          </div>
        </TiltCard>
      ))}
    </section>
  );
};

export default Bento;
