"use client";
import { smartContracts } from "@/data";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import LazyVideo from "./LazyVideo";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const ProgramIdBadge = ({ programId, network }: { programId: string; network: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(programId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2 mt-6 mb-8">
      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
        {network} Program ID
      </span>
      <div 
        onClick={handleCopy}
        className="flex items-center gap-3 bg-slate-900 text-slate-200 px-4 py-2.5 rounded-xl text-sm font-mono cursor-pointer hover:bg-slate-800 transition-colors group w-fit border border-slate-700 shadow-inner"
      >
        <span className="truncate max-w-[200px] md:max-w-[300px]">{programId}</span>
        <div className="p-1.5 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-slate-400" />}
        </div>
      </div>
    </div>
  );
};

export default function SmartContracts() {
  return (
    <div className="flex flex-col space-y-32 py-20">
      {smartContracts.map((contract, index) => (
        <motion.div
          key={contract.id}
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
            {contract.img.endsWith(".mp4") ? (
              <LazyVideo
                src={contract.img}
                className="w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            ) : (
              <img
                src={contract.img}
                alt={contract.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            )}
          </div>

          {/* Text Side */}
          <div className="w-full md:w-2/5 flex flex-col items-start text-left">
            <div className="flex flex-wrap gap-2 mb-6">
              {contract.techStack?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 border border-emerald-200 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight">
              {contract.title}
            </h3>

            <p className="text-slate-500 text-lg md:text-xl font-sans leading-relaxed mb-2 max-w-lg">
              {contract.des}
            </p>

            <ProgramIdBadge programId={contract.programId} network={contract.network} />

            <a
              href={contract.link}
              target="_blank"
              className="group/link inline-flex items-center gap-2 text-slate-900 font-bold tracking-widest uppercase text-xs border-b-2 border-transparent hover:border-slate-900 transition-all pb-1"
            >
              VIEW ON GITHUB
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
