"use client";
import Link from "next/link";
import { cn } from "../lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  forwardRef,
  ElementType,
  ReactNode,
  isValidElement,
} from "react";
import { ClassValue } from "clsx";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
  link,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  link: URL;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <Link href={link}>
      <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
        <div
          className={cn(
            "py-20 flex items-center justify-center",
            containerClassName
          )}
          style={{
            perspective: "1000px",
          }}
        >
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "flex items-center justify-center relative transition-all duration-200 ease-linear",
              className
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {children}
          </div>
        </div>
      </MouseEnterContext.Provider>
    </Link>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardItemProps {
  as?: ElementType<any>;
  children?: React.ReactNode;
  className: ClassValue;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: unknown;
}

export const CardItem = forwardRef<HTMLDivElement, CardItemProps>(
  (
    {
      as: Component = "div",
      children,
      className,
      translateX = 0,
      translateY = 0,
      translateZ = 0,
      rotateX = 0,
      rotateY = 0,
      rotateZ = 0,
      ...rest
    },
    ref
  ): React.JSX.Element => {
    const innerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
      handleAnimations();
    }, [isMouseEntered]);

    const handleAnimations = () => {
      const element =
        (ref as React.RefObject<HTMLDivElement>)?.current || innerRef.current;
      if (!element) return;
      if (isMouseEntered) {
        element.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
        element.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      }
    };

    const baseClassName = "w-fit transition duration-200 ease-linear";

    const combinedClassName: ClassValue = cn(baseClassName, className ?? "");

    // Safely handle children
    //@ts-ignore
    const safeChildren = React.Children.toArray(children).filter(
      (child) => child !== null && child !== undefined
    );

    // If it's a string (HTML element), use createElement
    if (typeof Component === "string") {
      return React.createElement(
        Component,
        {
          ref: ref || innerRef,
          className: combinedClassName,
          ...rest,
        },
        ...safeChildren
      );
    }
    return (
      <div
        ref={ref || innerRef}
        className={combinedClassName as string}
        {...rest}
      >
        {safeChildren}
      </div>
    );
    // If it's a component, use standard JSX rendering
    // return (
    //   <Component
    //     ref={ref || innerRef}
    //     className={combinedClassName as string}
    //     {...rest}
    //   >
    //     {safeChildren}
    //   </Component>
    // );
  }
);

CardItem.displayName = "CardItem";

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
