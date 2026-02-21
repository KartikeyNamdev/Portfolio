"use client";
import React from "react";
import { IconCloudDemo } from "./skillCloud";
type CodeIconProps = React.SVGProps<SVGSVGElement>;
function CodeIcon(props: CodeIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
const TechGlobe = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="flex flex-col items-center gap-4 mb-12">
        <CodeIcon className="w-12 h-12 text-blue-600" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Modern Tech <span className="text-blue-600">Stack</span>
        </h1>
        <p className="text-slate-500 font-medium md:text-lg max-w-xl text-center">
          Building high-performance, distributed systems using industry-leading
          technologies.
        </p>
      </div>
      <div className="w-full flex justify-center max-w-4xl mx-auto">
        <IconCloudDemo />
      </div>
    </div>
  );
};

export default TechGlobe;
