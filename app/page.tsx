"use client";
import AllProjects from "./components/allProjects";
import { SparklesPreview } from "./components/Hero";
import { FloatingNav } from "./components/newNav";
import TechStack from "./components/TechStack";
import { navItems } from "@/data";
import Grid from "./components/achievements";
import TechnicalPrinciples from "./components/TechnicalPrinciples";
import Footer from "./components/footer";
import { motion } from "motion/react";

import LearningRoadmap from "./components/LearningRoadmap";
import Web3Animation from "./components/Web3Animation";
import { VideoGrid } from "./components/TechVideoGrid";

export default function Home() {
  return (
    <div className="relative scroll-smooth bg-[#fdfcfb]">
      <FloatingNav navItems={navItems} />

      <section id="about">
        <SparklesPreview />
      </section>

      {/* Skills & Tech Section - Premium Editorial Layout */}
      <section
        id="skills"
        className="py-24 bg-white/50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <TechStack />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-32 bg-white/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif text-slate-900 tracking-tighter mb-4"
            >
              Featured{" "}
              <span className="italic font-light text-blue-600">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-slate-400 font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold"
            >
              Engineering & Building Modern Web3 Infrastructure
            </motion.p>
          </div>
          <AllProjects />
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 tracking-tighter"
            >
              Milestones <span className="italic font-light">&</span> Awards
            </motion.h2>
          </div>
          <Grid />
        </div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[60px] -z-10 pointer-events-none" />
      </section>

      {/* Learning Roadmap - Redesigned Section Heading */}
      <section id="learning" className="py-32">
        <LearningRoadmap />
      </section>

      {/* Engineering Principles */}
      <section id="principles">
        <TechnicalPrinciples />
      </section>

      <div className="bg-white border-t border-slate-100">
        <Footer />
      </div>

      {/* Custom Global Styles for Serif Look */}
      <style jsx global>{`
        h1,
        h2,
        h3 {
          font-family: var(--font-serif), serif;
        }
        p,
        span,
        div,
        a,
        button {
          font-family: var(--font-sans), sans-serif;
        }
        .font-serif {
          font-family: var(--font-serif), serif;
        }
        .font-sans {
          font-family: var(--font-sans), sans-serif;
        }
      `}</style>
    </div>
  );
}
