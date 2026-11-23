import React from "react";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark"; // light = for warm white background; dark = for charcoal/forest background
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", theme = "light" }) => {
  const isDark = theme === "dark";
  const primaryColor = isDark ? "#F7F7F2" : "#254C38";
  const textColor = isDark ? "#FFFFFF" : "#252925";
  const subtextColor = isDark ? "#D1D5DB" : "#5E645E";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Geometric Stretch Tension Monogram */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {/* Outer square frame with chamfered architectural corners */}
        <rect
          x="2"
          y="2"
          width="40"
          height="40"
          rx="6"
          stroke={primaryColor}
          strokeWidth="2.5"
          fill="none"
        />
        {/* Diagonal Tension Membrane Vector "Z" */}
        <path
          d="M12 14H32L12 30H32"
          stroke={primaryColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Architectural Center Tension Dot */}
        <circle cx="22" cy="22" r="2.5" fill={primaryColor} />
      </svg>

      {/* Brand Lettermark */}
      <div className="flex flex-col tracking-tight">
        <span
          className="font-extrabold text-xl leading-none uppercase tracking-[0.18em]"
          style={{ color: textColor, fontFamily: "var(--font-manrope)" }}
        >
          ZENCEIL
        </span>
        <span
          className="text-[9px] font-semibold tracking-[0.34em] uppercase mt-1"
          style={{ color: subtextColor, fontFamily: "var(--font-inter)" }}
        >
          STRETCH CEILING
        </span>
      </div>
    </div>
  );
};
