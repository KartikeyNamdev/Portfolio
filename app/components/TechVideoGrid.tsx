"use client";

import React from "react";
import { motion } from "motion/react";
import LazyVideo from "./LazyVideo";

interface TechVideoCardProps {
  videoUrl: string;
  title: string;
  description: string;
  className?: string;
}

export const TechVideoCard = ({
  videoUrl,
  title,
  description,
  className,
}: TechVideoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:shadow-2xl hover:shadow-blue-500/10 ${className}`}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-100">
        <LazyVideo
          src={videoUrl}
          className="h-full w-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
    </motion.div>
  );
};

export const VideoGrid = () => {
  const videos = [
    {
      url: "https://cdn.pixabay.com/video/2021/06/07/76805-560201276_tiny.mp4",
      title: "Ethereum L2 Scaling",
      description:
        "Optimizing state transition functions and fraud proof verification for rollup architectures.",
    },
    {
      url: "https://cdn.pixabay.com/video/2024/11/21/242599_tiny.mp4",
      title: "Mining Infrastructure",
      description:
        "Managing large-scale ASIC fleets with custom liquid cooling and automated hardware health monitoring.",
    },
    {
      url: "https://cdn.pixabay.com/video/2020/08/21/47802-451812879_tiny.mp4",
      title: "Security Auditing",
      description:
        "Static and dynamic analysis of smart contracts to prevent reentrancy and integer overflow vulnerabilities.",
    },
    {
      url: "https://cdn.pixabay.com/video/2020/10/30/53781-476539830_tiny.mp4",
      title: "Hardware Security",
      description:
        "Integrating HSMs and cold-storage signing modules for enterprise-grade custodial solutions.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-6">
      {videos.map((vid, idx) => (
        <TechVideoCard
          key={idx}
          videoUrl={vid.url}
          title={vid.title}
          description={vid.description}
        />
      ))}
    </div>
  );
};
