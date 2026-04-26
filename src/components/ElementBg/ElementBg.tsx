import { useCallback, useEffect, useRef, useState } from "react";
import "./ElementBg.css";

interface BgElement {
  type:
    | "grid"
    | "orb"
    | "ring"
    | "diamond"
    | "cross"
    | "dot"
    | "line"
    | "bracket";
  className: string;
  parallaxFactor: number;
  style?: React.CSSProperties;
}

const BG_ELEMENTS: BgElement[] = [
  // Grid — no parallax, stays fixed
  { type: "grid", className: "el-bg-grid", parallaxFactor: 0 },

  // Orbs
  {
    type: "orb",
    className: "el-bg-orb el-bg-orb--left",
    parallaxFactor: 0.015,
  },
  {
    type: "orb",
    className: "el-bg-orb el-bg-orb--right",
    parallaxFactor: 0.02,
  },
  {
    type: "orb",
    className: "el-bg-orb el-bg-orb--center",
    parallaxFactor: 0.012,
  },

  // Rings
  {
    type: "ring",
    className: "el-bg-ring el-bg-ring--top",
    parallaxFactor: 0.03,
  },
  {
    type: "ring",
    className: "el-bg-ring el-bg-ring--bottom",
    parallaxFactor: 0.025,
  },
  {
    type: "ring",
    className: "el-bg-ring el-bg-ring--mid",
    parallaxFactor: 0.04,
  },

  // Diamonds
  {
    type: "diamond",
    className: "el-bg-diamond el-bg-diamond--a",
    parallaxFactor: 0.035,
  },
  {
    type: "diamond",
    className: "el-bg-diamond el-bg-diamond--b",
    parallaxFactor: 0.045,
  },

  // Crosses
  {
    type: "cross",
    className: "el-bg-cross el-bg-cross--a",
    parallaxFactor: 0.05,
  },
  {
    type: "cross",
    className: "el-bg-cross el-bg-cross--b",
    parallaxFactor: 0.06,
  },
  {
    type: "cross",
    className: "el-bg-cross el-bg-cross--c",
    parallaxFactor: 0.045,
  },

  // Dots
  { type: "dot", className: "el-bg-dot el-bg-dot--a", parallaxFactor: 0.07 },
  { type: "dot", className: "el-bg-dot el-bg-dot--b", parallaxFactor: 0.06 },
  { type: "dot", className: "el-bg-dot el-bg-dot--c", parallaxFactor: 0.08 },
  { type: "dot", className: "el-bg-dot el-bg-dot--d", parallaxFactor: 0.055 },

  // Lines
  { type: "line", className: "el-bg-line el-bg-line--a", parallaxFactor: 0.03 },
  { type: "line", className: "el-bg-line el-bg-line--b", parallaxFactor: 0.04 },

  // Brackets
  {
    type: "bracket",
    className: "el-bg-bracket el-bg-bracket--a",
    parallaxFactor: 0.035,
  },
  {
    type: "bracket",
    className: "el-bg-bracket el-bg-bracket--b",
    parallaxFactor: 0.04,
  },
];

export default function ElementBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const latestMouse = useRef({ x: 0, y: 0 });
  const isTracking = useRef(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    latestMouse.current = {
      x: e.clientX - centerX,
      y: e.clientY - centerY,
    };

    if (!isTracking.current) {
      isTracking.current = true;
      rafId.current = requestAnimationFrame(() => {
        setOffset({ x: latestMouse.current.x, y: latestMouse.current.y });
        isTracking.current = false;
      });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const parent = container.parentElement;
    if (!parent) return;

    parent.addEventListener("mousemove", handleMouseMove);
    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove]);

  return (
    <div className="el-bg" ref={containerRef} aria-hidden="true">
      {BG_ELEMENTS.map((el, i) => {
        const tx = offset.x * el.parallaxFactor;
        const ty = offset.y * el.parallaxFactor;
        const parallaxStyle: React.CSSProperties =
          el.parallaxFactor > 0
            ? ({
                "--px-x": `${tx}px`,
                "--px-y": `${ty}px`,
              } as React.CSSProperties)
            : {};

        return (
          <span
            key={i}
            className={el.className}
            style={{ ...parallaxStyle, ...el.style }}
          />
        );
      })}
    </div>
  );
}
