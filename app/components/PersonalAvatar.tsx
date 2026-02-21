"use client";

import React from "react";
import { motion } from "motion/react";

export default function PersonalAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="relative w-24 h-24 md:w-32 md:h-32 group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />

      <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/50 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        {/* Placeholder for Memoji/Portrait */}
        <div className="w-full h-full bg-slate-100 flex items-center justify-center overflow-hidden">
          <img
            src="/me.jpeg"
            alt="Kartikey Namdev"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110"
          />
        </div>

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* 3D-feeling badge */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-2 -right-2 bg-white px-2 py-1 rounded-lg shadow-lg border border-slate-100"
      >
        <span className="text-[10px] font-bold text-blue-600">IN</span>
      </motion.div>
    </motion.div>
  );
}
