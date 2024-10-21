"use client";

import { useRef } from "react";

const TiltCard = ({ children, className, style }) => {
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
      const degree = (distanceToCenter * 3) / maxDistance;

      card.current.style.transform = `perspective(400px) rotate3D(${-rx}, ${ry}, 0, ${degree}deg)`;
      gloss.current.style.transform = `translate(${ry * 100}%, ${rx * 100}%) scale(2.4)`;
      gloss.current.style.opacity = (distanceToCenter * 0.6) / maxDistance;
      gloss.current.style.display = "block";
      animationFrameId = null;
    });
  };

  const handleMouseLeave = () => {
    card.current.style.transform = null;
    gloss.current.opacity = 0;
    gloss.current.style = null;
  };

  return (
    <div
      className={`main-shadow relative cursor-pointer overflow-hidden rounded-2xl backdrop-blur-[20px] duration-200 ease-in ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={card}
    >
      <div
        className="gloss pointer-events-none absolute left-0 top-0 hidden h-full w-full rounded-full"
        ref={gloss}
      />
      {children}
    </div>
  );
};

export default TiltCard;
