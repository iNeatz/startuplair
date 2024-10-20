"use client";

import { useRef } from "react";

const TiltCard = ({ children, className }) => {
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
      const degree = (distanceToCenter * 10) / maxDistance;

      card.current.style.transform = `perspective(400px) rotate3D(${-rx}, ${ry}, 0, ${degree}deg)`;
      gloss.current.style.transform = `translate(${ry * 100}%, ${rx * 100}%) scale(2.4)`;
      gloss.current.style.opacity = (distanceToCenter * 0.6) / maxDistance;
      gloss.current.style.display = "block";
      animationFrameId = null;
    });
  };

  const handleMouseLeave = () => {
    card.current.style.transform = "";
    gloss.current.opacity = 0;
    gloss.current.style = null;
  };

  return (
    <div
      className={`main-shadow relative min-h-[400px] min-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-2 duration-200 ease-in ${className} bg-transparent`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseLeave}
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.3), rgba(0,0,0,0.2))`,
        backgroundSize: 40 + "px",
        backdropFilter: "blur(20px)",
      }}
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
