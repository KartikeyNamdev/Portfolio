"use client";
import React from "react";
import { motion } from "motion/react";
import { curriculum } from "@/data";
import { cn } from "../lib/utils";
import LazyVideo from "./LazyVideo";

const LearningRoadmap = () => {
  return (
    <section id="learning" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-slate-900 mb-6 tracking-tighter"
          >
            Currently{" "}
            <span className="italic font-light text-blue-600">Learning</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-slate-400 font-sans uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold"
          >
            Deep-Diving into the Solana Ecosystem & Advanced Machine Learning
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {curriculum.map((item, index) => (
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
                "flex items-center space-x-4 cursor-default transition-all group",
              )}
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {index + 1}
              </div>
              <span className="text-slate-800 font-medium text-sm md:text-base leading-tight">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Building on Solana
              </h3>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Currently architecting a DeFi suite focusing on secure on-chain
                logic. Implementing <strong>Escrow protocols</strong>,{" "}
                <strong>Vault management</strong>, and{" "}
                <strong>Automated Staking</strong> systems using the Anchor
                framework.
              </p>
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
        </div>
      </div>
    </section>
  );
};

export default LearningRoadmap;
