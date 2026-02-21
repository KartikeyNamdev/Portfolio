"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function LazyVideo({
  src,
  className,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
}: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "200px" });
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldLoad(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {shouldLoad ? (
        <video
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
          {/* Subtle placeholder while video is not in view */}
          <div className="w-8 h-8 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
