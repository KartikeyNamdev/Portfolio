import Image from "next/image";
import { projects } from "@/data";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import LazyVideo from "./LazyVideo";

export default function AllProjects() {
  return (
    <div className="flex flex-col space-y-32 py-20">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={cn(
            "group flex flex-col md:flex-row items-center gap-12 lg:gap-24 px-6 md:px-0",
            index % 2 !== 0 ? "md:flex-row-reverse" : "",
          )}
        >
          {/* Image/Video Side */}
          <div className="w-full md:w-3/5 aspect-video relative overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-200/50 shadow-2xl shadow-slate-200/50">
            {project.img.endsWith(".mp4") ? (
              <LazyVideo
                src={project.img}
                className="w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            ) : (
              <img
                src={project.img}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            )}
          </div>

          {/* Text Side */}
          <div className="w-full md:w-2/5 flex flex-col items-start text-left">
            <div className="flex gap-2 mb-6">
              {project.iconLists.map((icon, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full bg-white border border-slate-100 p-1.5 shadow-sm overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={icon}
                    alt="tech"
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight">
              {project.title}
            </h3>

            <p className="text-slate-500 text-lg md:text-xl font-sans leading-relaxed mb-8 max-w-lg">
              {project.des}
            </p>

            <a
              href={project.link}
              target="_blank"
              className="group/link inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs border-b-2 border-transparent hover:border-blue-600 transition-all pb-1"
            >
              EXPLORE CASE STUDY
              <span className="group-hover/link:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
