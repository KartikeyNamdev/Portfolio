import React from "react";
import { AnimatePresence, motion } from "motion/react";

// import { CanvasRevealEffect } from "./";
import { CanvasRevealEffect } from "./myApproach";

const Approach = () => {
  return (
    <section className="w-full py-24">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center text-slate-900 mb-16 tracking-tighter">
        The Professional{" "}
        <span className="italic font-light text-blue-600">Workflow</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 px-6">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your architecture's goals, scalability needs, 
          and key functionalities. We'll discuss performance, 
          security, and infrastructure requirements."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-blue-500 rounded-3xl overflow-hidden"
            colors={[[59, 130, 246]]}
          />
        </Card>
        <Card
          title="Implementation & Testing"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I dive into building the systems.
          From low-level programs to complex distributed microservices, 
          I ensure everything is robust and well-documented."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-slate-700 rounded-3xl overflow-hidden"
            colors={[
              [148, 163, 184],
              [71, 85, 105],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Deployment & Scaling"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where we go live! I'll handle the deployment pipelines, 
          setting up observability tooling, and ensuring the platform 
          is ready for peak production traffic."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-indigo-600 rounded-3xl overflow-hidden"
            colors={[[99, 102, 241]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-slate-200 group/canvas-card flex items-center justify-center
        max-w-sm w-full mx-auto p-8 relative lg:h-[35rem] rounded-3xl bg-white shadow-xl shadow-slate-100/50 transition-all duration-300"
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-slate-200" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-slate-200" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-slate-200" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-slate-200" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-4">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-300 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-slate-900 mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-300"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-6 group-hover/canvas-card:text-white/90 text-center
         group-hover/canvas-card:-translate-y-2 transition duration-300 leading-relaxed font-medium"
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="relative group/btn">
      <button className="relative inline-flex overflow-hidden rounded-full p-[1.5px] shadow-lg shadow-blue-200">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BFDBFE_0%,#3B82F6_50%,#BFDBFE_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-50 px-8 py-3 text-blue-600 backdrop-blur-3xl font-extrabold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
