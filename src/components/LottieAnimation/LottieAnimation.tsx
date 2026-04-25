import LottieReact from "lottie-react";

interface LottieAnimationProps {
  animationData: any;
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export default function LottieAnimation({
  animationData,
  width = 300,
  height = 300,
  loop = true,
  autoplay = true,
  className = "",
}: LottieAnimationProps) {
  // Some bundlers return the component directly while others wrap it in a default field.
  const Lottie =
    (LottieReact as unknown as { default?: typeof LottieReact }).default ??
    LottieReact;

  return (
    <div
      className={className}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
}
