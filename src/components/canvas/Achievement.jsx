"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

// Single Card Component
export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={twMerge(
      "rounded-lg relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-full bg-white dark:bg-white transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    {/* Image always fills container */}
    <img
      src={card.src}
      alt={card.title}
      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out transform hover:scale-105"
    />

    {/* Overlay text */}
    <div
      className={twMerge(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

// Achievement Grid Component
export function Achievement({ cards }) {
  const [hovered, setHovered] = useState(null);

  if (!cards || !Array.isArray(cards)) return null;

  return (
    <div className={twMerge(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-screen-2xl mx-auto px-4 md:px-8 w-full rounded-2xl border border-black dark:border-black shadow-sm bg-white dark:bg-white py-8",
      hovered !== null && "border-transparent"
    )}>
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

export default Achievement;
