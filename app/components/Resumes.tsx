"use client";
import { motion } from "motion/react";
import { ArrowRight, FileText, Code, Database } from "lucide-react";

const ResumeCard = ({
  title,
  subtitle,
  icon: Icon,
  skills,
  impactStatement,
  credibilityLine,
  microProof,
  ctaText,
  gradientFrom,
  gradientTo,
  link,
  delay,
}: {
  title: string;
  subtitle: string;
  icon: any;
  skills: string[];
  impactStatement: string;
  credibilityLine: string;
  microProof: string;
  ctaText: string;
  gradientFrom: string;
  gradientTo: string;
  link: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative group w-full"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-10 rounded-[2rem] transition-opacity duration-500 blur-xl`}
      />

      <div className="relative h-full flex flex-col bg-white border border-slate-100 p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 hover:border-slate-300 transition-all duration-500 overflow-hidden cursor-pointer">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-12 relative z-10">
          <div
            className={`p-4 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}
          >
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <a
            href={link}
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-blue-600 font-semibold text-sm transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            {ctaText}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* Text Section */}
        <div className="flex-1 relative z-10 flex flex-col">
          <p className="text-xs font-bold text-blue-600 mb-3 uppercase tracking-widest">
            {/* {credibilityLine} */}
          </p>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-slate-600 font-sans text-base leading-relaxed mb-6">
            {subtitle}
          </p>

          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl mb-8 group-hover:border-blue-100 transition-colors group-hover:bg-blue-50/50">
            <p className="text-slate-800 font-medium text-sm md:text-base flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">✦</span>
              <span>{impactStatement}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-xs font-semibold rounded-full group-hover:border-slate-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              {microProof}
            </p>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700">
          <FileText size={300} />
        </div>
      </div>
    </motion.div>
  );
};

export default function Resumes() {
  return (
    <section id="resume" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-slate-900 tracking-tighter mb-6"
          >
            Where I Add{" "}
            <span className="italic font-light text-blue-600">Value</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl font-serif font-medium text-slate-700 mb-4"
          >
            I build production-grade systems across Web2 and Web3.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-slate-400 font-sans uppercase tracking-[0.2em] text-xs md:text-sm font-bold"
          >
            Depending on your use-case, here's how I can contribute
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <ResumeCard
            title="Solana / Web3 Developer"
            credibilityLine="Focused on Solana ecosystem • Anchor • Rust"
            subtitle="Designing secure on-chain systems for real-world financial use cases"
            impactStatement="Shipping escrow and staking primitives on Solana with production-ready architecture"
            microProof="Projects: Escrow | Staking | Token Systems"
            ctaText="View Web3 Work"
            icon={Code}
            skills={[
              "Smart Contracts (Rust + Anchor)",
              "Token / Vault / Escrow Systems",
              "Solana Architecture",
            ]}
            gradientFrom="from-emerald-400"
            gradientTo="to-teal-600"
            link="https://drive.google.com/file/d/1b8rV8Gh1JDF3VtAaA6AhxAxJ5kTVwbMj/view?usp=sharing"
            delay={0.1}
          />
          <ResumeCard
            title="Full Stack Engineer (MERN)"
            credibilityLine="Production experience with APIs, dashboards & real-time systems"
            subtitle="Building scalable backend systems and real-time applications"
            impactStatement="Engineered real-time systems using WebSockets + Redis for low-latency data flow"
            microProof="Projects: Trading System | Real-time Dashboard"
            ctaText="View Full Stack Work"
            icon={Database}
            skills={[
              "Next.js / React",
              "Node.js / PostgreSQL / Redis",
              "WebSockets & Realtime Apps",
            ]}
            gradientFrom="from-blue-500"
            gradientTo="to-indigo-600"
            link="https://drive.google.com/file/d/1nNNmjBFJBuF6XnM3A6RU1tAjU3XRgpz1/view?usp=sharing"
            delay={0.3}
          />
        </div>

        {/* Hire Me CTA */}
        {/* <div className="mt-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex flex-col items-center p-8 md:p-12 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 opacity-50 blur-xl"></div>
            <h3 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4 relative z-10">
              Need a real-time system or Web3 integration?
            </h3>
            <p className="text-slate-400 font-sans uppercase tracking-[0.2em] text-xs font-bold mb-8 relative z-10">
              Let's build something exceptional together.
            </p>
            <a
              href="mailto:kartikeynamdev2003@gmail.com"
              className="relative z-10 px-10 py-5 bg-white text-slate-900 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}
