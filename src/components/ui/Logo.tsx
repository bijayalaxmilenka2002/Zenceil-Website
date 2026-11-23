import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export const Logo: React.FC<LogoProps> = ({ className = "", theme = "light" }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Authentic Original Zenceil Brand Logo directly from zenceil.com */}
      <Image
        src="/images/zenceil-logo.png"
        alt="Zenceil Stretch Ceiling"
        width={208}
        height={75}
        priority
        className={`w-auto h-9 sm:h-11 md:h-12 object-contain transition-transform duration-300 hover:scale-[1.02] ${
          theme === "dark" ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]" : ""
        }`}
      />
    </div>
  );
};
