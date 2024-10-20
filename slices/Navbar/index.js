"use client";

import TiltCard from "@/components/Hero/TiltCard";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { useRef } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiMenuFries } from "react-icons/ci";
import { IoChatbubble } from "react-icons/io5";

/**
 * @typedef {import("@prismicio/client").Content.NavbarSlice} NavbarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavbarSlice>} NavbarProps
 * @param {NavbarProps}
 */
const Navbar = ({ slice }) => {
  const card = useRef(null);
  const gloss = useRef(null);
  let animationFrameId = null;

  const handleMouseMove = (event) => {
    if (animationFrameId) return;

    animationFrameId = requestAnimationFrame(() => {
      const pointerX = event.clientX;
      const pointerY = event.clientY;

      const cardRec = card.current.getBoundingClientRect();

      const halfWidth = cardRec.width / 2;
      const halfHeight = cardRec.height / 2;

      const cardCenterX = cardRec.left + halfWidth;
      const cardCenterY = cardRec.top + halfHeight;

      const deltaX = pointerX - cardCenterX;
      const deltaY = pointerY - cardCenterY;

      const rx = deltaY / halfHeight;
      const ry = deltaX / halfWidth;

      const distanceToCenter = Math.sqrt(
        Math.pow(deltaX, 2) + Math.pow(deltaY, 2),
      );
      const maxDistance = Math.max(halfWidth, halfHeight);

      gloss.current.style.transform = `translate(${ry * 100}%, ${rx * 100}%) scale(2.4)`;
      gloss.current.style.opacity = (distanceToCenter * 0.6) / maxDistance;
      gloss.current.style.display = "block";
      animationFrameId = null;
    });
  };

  const handleMouseLeave = () => {
    gloss.current.opacity = 0;
    gloss.current.style = null;
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={card}
    >
      <div
        className="gloss pointer-events-none absolute left-0 top-0 hidden h-full w-full rounded-full"
        ref={gloss}
      />
      <div className="fixed mx-auto my-2 flex w-[95%] items-center justify-between rounded-xl bg-black p-2 px-2 text-white">
        <Link href="/">
          <PrismicNextImage field={slice.primary.logo} className="w-[100px]" />
        </Link>
        <div className="hidden rounded-[10px] bg-white/10 px-2 py-1 md:flex">
          {slice.primary.menu.map((item, index) => (
            <div
              key={item.id}
              className="cursor-pointer rounded-lg px-4 py-1 text-sm duration-200 hover:bg-white/20"
            >
              <PrismicNextLink field={item.link} />
            </div>
          ))}
        </div>
        <PrismicNextLink
          field={slice.primary.call_to_action}
          className="hidden items-center gap-1 rounded-lg bg-accent-default p-2 px-2 text-sm duration-200 hover:bg-accent-secondary md:flex"
        >
          {slice.primary.call_to_action.text}
          <IoChatbubble className="text-lg" />
        </PrismicNextLink>
        <div className="flex items-center gap-1 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-lg border p-2 text-lg hover:bg-white/10 md:hidden">
              <CiMenuFries />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {slice.primary.menu.map((item, index) => (
                <DropdownMenuItem
                  key={item.id}
                  className="cursor-pointer rounded-lg px-4 py-1 text-sm duration-200 hover:bg-white/20"
                >
                  <PrismicNextLink field={item.link} />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <PrismicNextLink
            field={slice.primary.call_to_action}
            className="flex items-center gap-1 rounded-lg bg-accent-default p-2 px-2 text-sm duration-200 hover:bg-accent-secondary md:hidden"
          >
            <IoChatbubble className="text-lg" />
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
