"use client";
import AllProjects from "./components/allProjects";
import { SparklesPreview } from "./components/Hero";
import { FloatingNav } from "./components/newNav";
import { CanvasRevealEffect } from "./components/myApproach";
import TechGlobe from "./components/TechGlobe";
import { navItems } from "@/data";
import Grid from "./components/achievements";
import Approach from "./components/Approach";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="relative scroll-smooth">
      <div>
        <FloatingNav navItems={navItems} />
        <section id="about">
          <SparklesPreview />
        </section>
      </div>
      <section id="skills">
        <TechGlobe />
      </section>

      <CanvasRevealEffect
        animationSpeed={1}
        containerClassName="bg-black"
        colors={[
          [236, 72, 153],
          [232, 121, 249],
        ]}
        dotSize={2}
        showGradient={true}
      />
      <section id="projects">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-mono py-12">PROJECTS</h1>
          </div>
          <div className="pb-16">
            <AllProjects />
          </div>
        </div>
      </section>
      <section id="achievements" className="">
        <div className="pt-62 bg-black">
          <div className="p-28 pl-40 justify-center">
            <Grid />
          </div>
        </div>
      </section>
      <section id="workflow">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-900">
          <Approach></Approach>
        </div>
      </section>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}
