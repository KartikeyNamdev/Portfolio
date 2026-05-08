"use client";
import React from "react";
import { motion } from "motion/react";
import { curriculum } from "@/data";
import { cn } from "../lib/utils";
import LazyVideo from "./LazyVideo";
import { Check } from "lucide-react";

const LearningRoadmap = () => {
  return (
    <section id="learning" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 mb-6 tracking-tighter"
          >
            Deep Dive:{" "}
            <span className="italic font-light text-blue-600">
              Solana & Systems
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-slate-500 font-sans uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-6"
          >
            Technical Depth (Applied Learning)
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Applied these concepts in building escrow contracts, staking logic,
            and real-time backend systems using WebSockets + Redis.
          </motion.p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8 border-b border-slate-200 pb-4">
            🧠 Core Concepts{" "}
            <span className="text-emerald-600 text-sm font-sans uppercase tracking-widest font-bold ml-2">
              (Applied & Completed)
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {curriculum.slice(0, 13).map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(236, 253, 245, 1)",
                    boxShadow:
                      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                  }}
                  className={cn(
                    "p-4 rounded-2xl border border-emerald-200/60 bg-emerald-50/50 backdrop-blur-sm",
                    "flex items-center space-x-4 cursor-default transition-all group relative overflow-hidden",
                  )}
                >
                  <div className="absolute right-[-10px] top-[-10px] opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity">
                    <Check size={80} />
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 z-10 bg-emerald-500 text-white shadow-md shadow-emerald-200 group-hover:bg-emerald-600 group-hover:scale-110">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="font-medium text-sm md:text-base leading-tight z-10 transition-colors text-emerald-900">
                    {item}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8 border-b border-slate-200 pb-4">
            🚧 Advanced{" "}
            <span className="text-blue-600 text-sm font-sans uppercase tracking-widest font-bold ml-2">
              (In Progress)
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {curriculum.slice(13).map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    boxShadow:
                      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                  }}
                  className={cn(
                    "p-4 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm",
                    "flex items-center space-x-4 cursor-default transition-all group relative overflow-hidden",
                  )}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 z-10 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                    {index + 14}
                  </div>
                  <span className="font-medium text-sm md:text-base leading-tight z-10 transition-colors text-slate-800 group-hover:text-blue-900">
                    {item}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-3xl bg-blue-600 text-white max-w-4xl w-full shadow-2xl shadow-blue-200 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 group">
              <LazyVideo
                src="https://cdn.pixabay.com/video/2019/12/15/30200-380473759_tiny.mp4"
                className="w-full h-full"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Building a DeFi Suite on Solana
              </h3>
              <div className="text-blue-100 text-lg mb-8 leading-relaxed space-y-4">
                <p>Designing and implementing:</p>
                <ul className="list-none space-y-2 ml-4">
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-blue-300" /> Escrow protocols
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-blue-300" /> Vault-based fund management
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-blue-300" /> Automated staking systems
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-300 mr-2">Using:</span>
                  <span className="px-3 py-1 bg-blue-800/50 rounded-full text-sm font-medium border border-blue-400/30">Anchor</span>
                  <span className="px-3 py-1 bg-blue-800/50 rounded-full text-sm font-medium border border-blue-400/30">Rust</span>
                  <span className="px-3 py-1 bg-blue-800/50 rounded-full text-sm font-medium border border-blue-400/30">Solana Architecture</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://x.com/_KartikeyNamdev"
                  target="_blank"
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-block text-center"
                >
                  Follow on X
                </a>
                <a
                  href="https://www.linkedin.com/in/kartikey-namdev/"
                  target="_blank"
                  className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors inline-block text-center"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default LearningRoadmap;
