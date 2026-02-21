"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import LazyVideo from "./LazyVideo";
import { Database, Activity, Cpu, Server, Network } from "lucide-react";

/* ---------------- ICON MAP ---------------- */

const iconMap: Record<string, string | null> = {
  typescript: "typescript/typescript-original.svg",
  javascript: "javascript/javascript-original.svg",
  nodejs: "nodejs/nodejs-original.svg",
  python: "python/python-original.svg",

  react: "react/react-original.svg",
  nextjs: "nextjs/nextjs-original.svg",
  tailwind: "tailwindcss/tailwindcss-original.svg",

  redis: "redis/redis-original.svg",
  kafka: null, // lucide fallback
  grpc: null,
  websockets: null,

  postgresql: "postgresql/postgresql-original.svg",
  mongodb: "mongodb/mongodb-original.svg",
  prisma: "prisma/prisma-original.svg",
  sql: null,

  docker: "docker/docker-original.svg",
  kubernetes: "kubernetes/kubernetes-original.svg",
  prometheus: "prometheus/prometheus-original.svg",
  grafana: "grafana/grafana-original.svg",

  nestjs: "nestjs/nestjs-original.svg",
  fastapi: "fastapi/fastapi-original.svg",

  solana: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=040",
  ethereum: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040",
};

/* Lucide fallback icons */
const fallbackIcons: Record<string, React.ReactNode> = {
  kafka: <Activity className="w-8 h-8 text-orange-400" />,
  grpc: <Cpu className="w-8 h-8 text-purple-400" />,
  websockets: <Network className="w-8 h-8 text-cyan-400" />,
  sql: <Database className="w-8 h-8 text-green-400" />,
};

/* ---------------- SKILLS ---------------- */

const skills = [
  "typescript",
  "javascript",
  "nodejs",
  "python",
  "react",
  "nextjs",
  "tailwind",
  "websockets",
  "redis",
  "kafka",
  "grpc",
  "postgresql",
  "mongodb",
  "prisma",
  "sql",
  "docker",
  "kubernetes",
  "prometheus",
  "grafana",
  "nestjs",
  "fastapi",
  "solana",
  "ethereum",
];

const rows = [
  skills.slice(0, 5),
  skills.slice(5, 10),
  skills.slice(10, 15),
  skills.slice(15, 20),
  skills.slice(20, 25),
];

/* ---------------- COMPONENT ---------------- */

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50px", once: true });

  return (
    <div
      ref={ref}
      className="relative w-full py-40 overflow-hidden flex items-center justify-center min-h-screen bg-[#020205]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LazyVideo
          src="https://fdu82zekl2zzukop.public.blob.vercel-storage.com/coder.mp4"
          className="w-full h-full object-cover opacity-70 brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-[#020205]/55" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold text-white uppercase tracking-[0.2em]"
          >
            Tech <span className="text-blue-500">Stack</span>
          </motion.h2>
          <div className="mt-4 w-32 h-1 bg-blue-500 rounded-full" />
        </div>

        {/* Grid */}
        <div className="flex flex-col items-center gap-6 md:gap-10">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap gap-4 md:gap-8 justify-center"
            >
              {row.map((slug, index) => (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: rowIndex * 0.05 + index * 0.02 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="group relative w-16 h-20 md:w-24 md:h-28
                    bg-white/[0.04] border border-white/10 rounded-xl md:rounded-2xl
                    flex flex-col items-center justify-center cursor-pointer
                    transition-all hover:border-blue-500/50 hover:bg-white/20"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 mb-2 flex items-center justify-center">
                    {iconMap[slug] ? (
                      <img
                        src={
                          iconMap[slug]?.startsWith("http")
                            ? iconMap[slug]
                            : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconMap[slug]}`
                        }
                        alt={slug}
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    ) : (
                      fallbackIcons[slug]
                    )}
                  </div>

                  <span className="text-[8px] md:text-[9px] font-bold text-white/80 group-hover:text-white uppercase tracking-widest">
                    {slug}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
}
