import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent, RefObject } from "react";

interface TiltOptions {
  maxTilt?: number;
  smoothing?: number;
}

interface TiltHandlers {
  onPointerEnter: (e: PointerEvent<HTMLElement>) => void;
  onPointerDown: (e: PointerEvent<HTMLElement>) => void;
  onPointerMove: (e: PointerEvent<HTMLElement>) => void;
  onPointerLeave: () => void;
  onPointerCancel: () => void;
}

interface TiltState {
  rx: number;
  ry: number;
  mx: number;
  my: number;
  glow: number;
}

const REST: TiltState = { rx: 0, ry: 0, mx: 50, my: 50, glow: 0 };
const EPSILON = 0.01;

const prefersReducedMotion = (): boolean =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Escribe --rx, --ry (deg), --mx, --my (0-100) y --glow (0-1) en el elemento,
 * interpolados con rAF hacia la posición del puntero.
 */
export function useTilt<T extends HTMLElement>({
  maxTilt = 20,
  smoothing = 0.12,
}: TiltOptions = {}): { ref: RefObject<T | null>; handlers: TiltHandlers } {
  const ref = useRef<T | null>(null);
  const target = useRef<TiltState>({ ...REST });
  const current = useRef<TiltState>({ ...REST });
  const frame = useRef<number | null>(null);

  const write = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const c = current.current;
    el.style.setProperty("--rx", `${c.rx.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${c.ry.toFixed(2)}deg`);
    el.style.setProperty("--mx", c.mx.toFixed(2));
    el.style.setProperty("--my", c.my.toFixed(2));
    el.style.setProperty("--glow", c.glow.toFixed(3));
  }, []);

  const tick = useCallback(() => {
    const c = current.current;
    const t = target.current;
    let settled = true;
    (Object.keys(c) as (keyof TiltState)[]).forEach((key) => {
      const diff = t[key] - c[key];
      if (Math.abs(diff) > EPSILON) {
        c[key] += diff * smoothing;
        settled = false;
      } else {
        c[key] = t[key];
      }
    });
    write();
    frame.current = settled ? null : requestAnimationFrame(tick);
  }, [smoothing, write]);

  const start = useCallback(() => {
    if (frame.current === null) frame.current = requestAnimationFrame(tick);
  }, [tick]);

  const track = useCallback(
    (e: PointerEvent<HTMLElement>) => {
      if (prefersReducedMotion()) return;
      const rect = e.currentTarget.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      const y = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
      target.current = {
        ry: (x - 0.5) * 2 * maxTilt,
        rx: -(y - 0.5) * 2 * maxTilt,
        mx: x * 100,
        my: y * 100,
        glow: 1,
      };
      start();
    },
    [maxTilt, start],
  );

  const release = useCallback(() => {
    target.current = { ...REST, mx: target.current.mx, my: target.current.my };
    start();
  }, [start]);

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = null;
    },
    [],
  );

  return {
    ref,
    handlers: {
      onPointerEnter: track,
      onPointerDown: track,
      onPointerMove: track,
      onPointerLeave: release,
      onPointerCancel: release,
    },
  };
}
