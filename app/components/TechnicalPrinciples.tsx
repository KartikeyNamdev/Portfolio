"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const principles = [
  {
    number: "01",
    title: "Scalability by Design",
    description:
      "Architecting systems that handle exponential growth through modularity, horizontal scaling, and robust microservices architecture.",
    tag: "Infrastructure",
  },
  {
    number: "02",
    title: "Deterministic Execution",
    description:
      "Ensuring absolute reliability in distributed environments through formal verification and state-machine consistency.",
    tag: "Reliability",
  },
  {
    number: "03",
    title: "Trustless Security",
    description:
      "Building security directly into the protocol layer, prioritizing zero-knowledge proofs and secure smart contract design.",
    tag: "Security",
  },
  {
    number: "04",
    title: "Performance First",
    description:
      "Optimizing for low-latency, high-throughput execution in high-frequency trading and high-traffic blockchain networks.",
    tag: "Performance",
  },
];

export default function TechnicalPrinciples() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Header Side */}
          <div className="lg:w-1/3 sticky top-32">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6"
            >
              Core Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-serif text-slate-900 leading-[0.9] tracking-tighter mb-8"
            >
              Engineering <br />
              <span className="italic font-light text-slate-400">
                Principles
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-500 text-lg font-sans leading-relaxed max-w-xs"
            >
              My work is guided by four technical pillars that ensure every
              system I build is ready for institutional-grade production.
            </motion.p>
          </div>

          {/* Principles Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {principles.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group border-t border-slate-100 pt-10 relative"
              >
                <span className="absolute top-10 right-0 text-slate-100 font-serif text-8xl -z-10 group-hover:text-blue-50 transition-colors duration-500">
                  {p.number}
                </span>
                <p className="text-blue-600 font-bold tracking-widest text-[10px] uppercase mb-4">
                  {p.tag}
                </p>
                <h3 className="text-3xl font-serif text-slate-900 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {p.title}
                </h3>
                <p className="text-slate-500 font-sans leading-relaxed text-base">
                  {p.description}
                </p>

                <div className="mt-8 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-in-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
