import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export const Logo: React.FC<LogoProps> = ({ className = "", theme = "light" }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Authentic Original Zenceil Brand Logo - Bold & High Visibility */}
      <Image
        src="/images/zenceil-logo.png"
        alt="Zenceil Stretch Ceiling"
        width={208}
        height={75}
        priority
        className={`w-auto h-11 sm:h-12 md:h-14 object-contain transition-transform duration-300 hover:scale-[1.03] filter contrast-[1.08] saturate-[1.05] ${
          theme === "dark"
            ? "brightness-0 invert drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)]"
            : "drop-shadow-xs"
        }`}
      />
    </div>
  );
};
