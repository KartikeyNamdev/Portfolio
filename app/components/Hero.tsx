"use client";
import React from "react";
import { SparklesCore } from "./sparkles";
import { FlipWords } from "./flip-words";
import AvatarDisplay from "./Avatar";
import { FloatingDock } from "./floatingDock";
import {
  IconBrandGmail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFile,
} from "@tabler/icons-react";

const dockItems = [
  {
    title: "gmail",
    icon: <IconBrandGmail />,
    href: "https://mail.google.com/mail/u/0/?fs=1&to=kartikeynamdev2003@gmail.com&su=SUBJECT&bcc=kartikeynamdev2003@gmail.com&tf=cm",
  },
  {
    title: "Github",
    icon: <IconBrandGithub />,
    href: "https://github.com/kartikeyNamdev/",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin />,
    href: "https://www.linkedin.com/in/kartikey-namdev-994a1420b/",
  },
  {
    title: "Twitter",
    icon: <IconBrandTwitter />,
    href: "https://x.com/_KartikeyNamdev",
  },
  {
    title: "Resume",
    icon: <IconFile />,
    href: "https://drive.google.com/file/d/1gQxV_mpIyDzGvdyXLL9zRWMk3IzioF-y/view",
  },
];
export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex items-center justify-center overflow-hidden rounded-md">
      {/* Sparkles background */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Main content with grid layout */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-8xl mx-auto px-4 relative z-20">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <h1 className="md:text-7xl text-3xl lg:text-6xl text-white">
            KARTIKEY NAMDEV
          </h1>
          <div className="mt-4">
            <FlipWords
              className="text-xl"
              words={[
                "FULL STACK DEVELOPER",
                "BACKEND DEVELOPER",
                "DEVOPS ENGINEER",
                "OPEN SOURCE CONTRIBUTOR",
              ]}
            />
            <FloatingDock desktopClassName="mt-4 " items={dockItems} />
          </div>
        </div>

        {/* Right column */}
        <div className="p-4 pt-40 flex items-center ">
          <AvatarDisplay modelPath="/me2.glb" />
        </div>
      </div>
    </div>
  );
}
