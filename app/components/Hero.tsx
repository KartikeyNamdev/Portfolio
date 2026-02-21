"use client";
import React from "react";
import { FlipWords } from "./flip-words";
import { FloatingDock } from "./floatingDock";
import {
  IconBrandGmail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFile,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import LazyVideo from "./LazyVideo";

const dockItems = [
  {
    title: "gmail",
    icon: <IconBrandGmail />,
    href: "https://mail.google.com/mail/u/0/?fs=1&to=kartikeynamdev2003@gmail.com&su=SUBJECT&bcc=kartikeynamdev2003@gmail.com&tf=cm",
  },
  {
    title: "Github",
    icon: <IconBrandGithub />,
    href: "https://github.com/kartikeyNamdev/",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin />,
    href: "https://www.linkedin.com/in/kartikey-namdev-994a1420b/",
  },
  {
    title: "Twitter",
    icon: <IconBrandTwitter />,
    href: "https://x.com/_KartikeyNamdev",
  },
  {
    title: "Resume",
    icon: <IconFile />,
    href: "https://drive.google.com/file/d/1gQxV_mpIyDzGvdyXLL9zRWMk3IzioF-y/view",
  },
];

export function SparklesPreview() {
  return (
    <div className="min-h-screen relative w-full bg-[#EAEFEF] flex items-center justify-center overflow-hidden pt-20">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[40px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-purple-100/20 rounded-full blur-[30px]" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content - Text Aligned Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-left"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-slate-900 font-serif leading-[0.85] mb-8 tracking-tighter">
              Kartikey <br />
              <span className="italic font-light text-blue-600">Namdev</span>
            </h1>

            <div className="h-16 mb-6">
              <FlipWords
                className="text-xl sm:text-2xl md:text-3xl text-black font-sans tracking-tight font-medium"
                words={[
                  "FULL STACK DEVELOPER",
                  "BACKEND ARCHITECT",
                  "WEB3 ENGINEER",
                  "PLATFORM ENGINEER",
                ]}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-slate-800 font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-12"
            >
              Based in India — Working Globally
            </motion.p>

            <div className="flex items-center gap-6">
              <FloatingDock items={dockItems} />
            </div>
          </motion.div>

          {/* Right Content - Video in Premium Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex-1 w-full max-w-[600px] relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative aspect-[4/5] w-full rounded-[30px] overflow-hidden border border-white/40 shadow-2xl backdrop-blur-sm bg-white/5 shadow-white/10">
              <LazyVideo
                src="https://fdu82zekl2zzukop.public.blob.vercel-storage.com/DollarVideo.mp4"
                className="w-full h-full scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
              />

              {/* Glass Overlay with Label */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold mb-1">
                  Infrastructure Focus
                </p>
                <h3 className="text-white text-lg font-serif italic font-light tracking-tight">
                  Financial Systems & Blockchain
                </h3>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Curved Horizon Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] fill-[#fdfcfb]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
}
