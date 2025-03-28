"use client";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const Grid = () => {
  return (
    <section
      id="achievements"
      className="w-full py-20 bg-black relative overflow-hidden px-4 md:px-0"
    >
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12 tracking-tight pb-18">
          Achievements & Milestones
        </h2>
        <BentoGrid className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {gridItems.map((item, index) => (
            <BentoGridItem
              href={item.href}
              id={item.id}
              key={item.id || index}
              title={item.title}
              description={item.description}
              className={`
                ${item.className} 
                transition-all duration-300 
                hover:scale-[1.02] 
                hover:shadow-xl 
                hover:z-20
              `}
              img={item.img}
              imgClassName={`
                ${item.imgClassName} 
                group-hover:opacity-80 
                transition-opacity
              `}
              titleClassName={`
                ${item.titleClassName} 
                group-hover:text-blue-400 
                transition-colors
              `}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
