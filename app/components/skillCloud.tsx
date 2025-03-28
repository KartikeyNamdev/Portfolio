import IconCloud from "./IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",

  "figma",
  "postman",
  "netlify",
  "python",

  "recoil",

  "postgresql",
  "mongodb",
  "jsonwebtokens",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
