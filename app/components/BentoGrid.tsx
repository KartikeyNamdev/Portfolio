import { useState, useRef } from "react";
import { IoCopyOutline } from "react-icons/io5";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

import { cn } from "../lib/utils";

import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import LazyVideo from "./LazyVideo";
import { useInView } from "motion/react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  href,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  href?: string;
}) => {
  const leftLists = ["Solana", "Rust", "Anchor"];
  const rightLists = ["Next.js", "Redis", "WebSockets"];

  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "kartikeynamdev2003@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const hasVideo = img?.endsWith(".mp4");

  return (
    <div
      ref={containerRef}
      onClick={() => {
        if (href && id !== 6) window.open(href, "_blank");
      }}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/10 group/bento hover:shadow-2xl transition duration-300 shadow-md bg-neutral-900 justify-between flex flex-col space-y-4",
        id !== 6 && href ? "cursor-pointer" : "",
        className,
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* Background: video or image */}
        <div className="w-full h-full absolute inset-0">
          {img &&
            (hasVideo ? (
              <LazyVideo
                src={img}
                className={cn(
                  imgClassName,
                  "h-full w-full object-cover object-center",
                )}
              />
            ) : (
              <img
                src={img}
                alt={img}
                className={cn(
                  imgClassName,
                  "object-cover object-[center_15%] w-full h-full",
                )}
              />
            ))}
        </div>

        {/* Cinematic gradient overlay — stronger for video cards */}
        <div
          className={cn(
            "absolute inset-0 z-10",
            hasVideo
              ? "bg-gradient-to-t from-black/80 via-black/30 to-black/10"
              : "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
          )}
        />

        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-30"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {/* Text content */}
        <div
          className={cn(
            titleClassName,
            "relative group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-8 z-20",
          )}
        >
          <div
            className={cn(
              "h-full flex flex-col w-full",
              titleClassName?.includes("justify-center") &&
                "justify-center items-center text-center",
              titleClassName?.includes("justify-end") && "justify-end",
              titleClassName?.includes("justify-start") && "justify-start",
            )}
          >
            {/* Subtitle / tag */}
            {/* <div className="font-serif text-[9px] xs:text-[10px] lg:text-[12px] text-white/80 uppercase tracking-[0.3em] mb-3 drop-shadow-sm font-semibold">
              {description}
            </div> */}

            {/* Main title */}
            <div
              className={cn(
                "font-serif text-xl lg:text-3xl font-semibold text-white leading-[1.1] tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",
                id === 1 ? "max-w-2xl" : "max-w-xs lg:max-w-sm",
              )}
            >
              {title}
            </div>

            {id === 6 && (
              <div className="mt-8 relative w-full flex justify-center">
                <div className="absolute -top-32 w-full flex justify-center pointer-events-none">
                  {isInView && (
                    <Lottie options={defaultOptions} height={200} width={400} />
                  )}
                </div>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-blue-600 text-white hover:bg-blue-700 shadow-xl transition-all scale-110"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
