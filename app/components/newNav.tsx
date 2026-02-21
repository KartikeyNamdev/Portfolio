"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { cn } from "../lib/utils";
import {
  IconUser,
  IconCode,
  IconBriefcase,
  IconAward,
  IconBook,
  IconMessage,
} from "@tabler/icons-react";

/**
 * Maps section names to appropriate Tabler icons
 */
const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "about":
      return <IconUser className="w-4 h-4" />;
    case "skills":
      return <IconCode className="w-4 h-4" />;
    case "projects":
      return <IconBriefcase className="w-4 h-4" />;
    case "learning":
      return <IconBook className="w-4 h-4" />;
    case "achievements":
      return <IconAward className="w-4 h-4" />;
    case "principles":
      return <IconMessage className="w-4 h-4" />;
    default:
      return null;
  }
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[95vw] md:max-w-fit md:min-w-[60vw] lg:min-w-fit fixed z-[5000] top-4 md:top-8 inset-x-0 mx-auto px-3 md:px-10 py-2.5 md:py-4 rounded-2xl border border-slate-200/50 shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.1)] items-center justify-center space-x-1 md:space-x-8 bg-white/70 backdrop-blur-2xl",
          className,
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex flex-col md:flex-row space-y-0.5 md:space-y-0 md:space-x-1.5 text-slate-500 hover:text-blue-600 transition-all duration-200 px-2 md:px-0 py-1",
            )}
          >
            <span className="block">{getIcon(navItem.name)}</span>
            <span className="text-[9px] md:text-xs font-bold tracking-tight cursor-pointer uppercase whitespace-nowrap">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
