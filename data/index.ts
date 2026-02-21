export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Learning", link: "#learning" },
  { name: "Achievements", link: "#achievements" },
  { name: "Principles", link: "#principles" },
];

export const curriculum = [
  "Intro to Blockchains",
  "Cryptography",
  "Solana Architecture",
  "Solana Jargons (Authority, Owner)",
  "PDAs (Program Derived Addresses)",
  "@solana/web3.js & Gill",
  "Solana Wallet Adapter",
  "Data Model",
  "Token Program",
  "DeFi (AMM, DLMM, CLMM, Perps)",
  "Rust (Basics to Advanced)",
  "Anchor Framework",
  "Common Contracts (Staking, Escrow)",
  "Indexing",
  "MPC & Shamir's Secret Sharing",
  "Ad Hoc Web2 + Web3 Integrations",
  "Partially Centralized Contracts",
];

export const gridItems = [
  {
    id: 1,
    title: "1st Runner up at Technovate Tech Conclave (Talrop)",
    description: "Demonstrated technical excellence in a nationwide conclave.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-10/6 opacity-90",
    titleClassName: "justify-end ",
    img: "/me.jpeg",
    spareImg: "",
    href: "https://www.linkedin.com/posts/jonesjoseph_madhya-pradesh-edition-nationwide-conclave-activity-7289965451474849792-D70H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVdmYABu8YX3a0659FtuMoCkuQapb6gc6Q",
  },
  {
    id: 2,
    title: "Official Platform for 2026 Khajuraho Carnival",
    description: "Built for MP Tourism & Government of Madhya Pradesh.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 ",
    imgClassName: "h-full w-full opacity-90",
    titleClassName: "justify-start",
    img: "/4ktemple.avif",
    spareImg: "",
    href: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
  },
  {
    id: 3,
    title: "The Architect’s Blueprint: Deconstructing the Solana Token Program",
    description:
      "Deep dive into SVM architecture, account isolations, and parallel execution.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "opacity-95 h-full w-full",
    titleClassName: "justify-center",
    img: "/SolanaCoin.mp4",
    spareImg: "",
    href: "https://www.bulbapp.io/p/2f5db8a3-e223-4dfc-96ff-edc88bf5753c/the-architects-blueprint-deconstructing-the-solana-token-program-and-account-model", // Example link to the blog
  },
  {
    id: 4,
    title: "Blog: How WebSockets & Queues Save Your Backend",
    description: "Deep dive into real-time infrastructure and scaling.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "opacity-90 h-full w-full",
    titleClassName: "justify-start",
    img: "https://cdn.pixabay.com/video/2024/11/21/242599_tiny.mp4",
    href: "https://medium.com/@kartikeynamdev2003/from-gareeb-startup-to-tech-genius-how-websockets-queues-and-pub-sub-save-your-backend-01c968f81217",
  },

  {
    id: 5,
    title: "Testify - SaaS for Testimonial Creation",
    description: "Built a scalable platform for embedding reviews easily.",
    className: "md:col-span-3 md:row-span-2 ",
    imgClassName: "w-full h-full opacity-90",
    titleClassName: "bottom-0 justify-end md:max-w-full max-w-60 ",
    img: "https://cdn.pixabay.com/video/2020/10/30/53781-476539830_tiny.mp4",
    spareImg: "",
    href: "https://github.com/KartikeyNamdev/Testify-Project",
  },
  {
    id: 6,
    title: "Let's build something exceptional together",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
    imgClassName: "h-full w-full object-cover opacity-90",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "/leaves.jpg",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Solanix — Advanced DeFi Suite (WIP)",
    des: "Currently building a sophisticated Solana-based project featuring Escrow, Vaults, and Staking logic. Implementing complex on-chain state management and secure asset handling.",
    img: "/SolanaCoin.mp4",
    iconLists: ["/next.svg", "/ts.svg", "/vercel.svg"],
    link: "https://github.com/kartikeyNamdev",
  },
  // {
  //   id: 2,
  //   title: "Exchange — Matching Engine & Trading System",
  //   des: "Implemented a deterministic bid/ask order book using TypeScript, Redis Pub/Sub, and WebSockets.",
  //   img: "/BitcoinVideo2.mp4",
  //   iconLists: ["/next.svg", "/ts.svg", "/vercel.svg"],
  //   link: "https://github.com/KartikeyNamdev/Exchange",
  // },
  {
    id: 3,
    title: "Merchant Paytm — Digital Wallet",
    des: "Built ACID-safe wallet transactions with P2P transfers and bank webhook processing.",
    img: "/ShoppingToken.mp4",
    iconLists: ["/next.svg", "/ts.svg", "/vercel.svg"],
    link: "https://roaring-starship-fbf52b.netlify.app/",
  },
  {
    id: 4,
    title: "CMS — EV Charging Content Management System",
    des: "Scalable platform with real-time data hooks, analytics, and geospatial map integration.",
    img: "/ev.mp4",
    iconLists: ["/next.svg", "/ts.svg", "/vercel.svg"],
    link: "https://cms-snowy-beta.vercel.app",
  },
  {
    id: 5,
    title: "Chess Town — Online Chess Platform",
    des: "A real-time online chess platform built with React, Node.js, and WebSockets. Features include real-time board updates, move validation, and game state management.",
    img: "/ChessVideo.mp4",
    iconLists: ["/next.svg", "/ts.svg", "/vercel.svg"],
    link: "https://github.com/KartikeyNamdev/ChessTown",
  },
  {
    id: 6,
    title: "Video Chat — WebRTC based Video Calling Service",
    des: "A high-performance peer-to-peer communication platform built with WebRTC and Socket.io. Features low-latency video/audio streaming, secure signaling architecture, and real-time connection handling.",
    img: "/VideoCalling.mp4",
    iconLists: ["/next.svg", "/ts.svg", "/vercel.svg"],
    link: "https://github.com/KartikeyNamdev/WebRTC_Project",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Kartikey was seamless. His ability to handle complex backend challenges while maintaining a clean frontend is rare. He delivered our event platform which handled thousands of users flawlessly.",
    name: "MP Tourism Client",
    title: "Khajuraho Carnival 2026",
  },
  {
    quote:
      "Kartikey's deep understanding of Web3 and high-performance systems helped us optimize our API reliability significantly during his time at Auctopus.",
    name: "Engineering Lead",
    title: "Auctopus Technologies",
  },
  {
    quote:
      "A proactive developer who doesn't just write code but understands the business requirements. His project 'Exchange' shows his capability in distributed systems.",
    name: "Technical Mentor",
    title: "Talrop Conclave",
  },
];

export const companies = [
  {
    id: 1,
    name: "Auctopus",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "MP Tourism",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Solana",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Redis",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - Auctopus Technologies",
    desc: "Built features in a TypeScript microservice environment, integrated Kafka pipelines and improved API reliability.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Platform Lead - Khajuraho Carnival",
    desc: "Designed and built the official platform for MP Tourism festival, handling thousands of live registrations.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web3 Developer (Freelance)",
    desc: "Focusing on Solana programs, SPL tokens, and on-chain state design for modern decentralized apps.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "System Architect (Ongoing)",
    desc: "Currently building a high-performance matching engine for a real-time trading exchange.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/kartikeyNamdev",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/_KartikeyNamdev",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kartikey-namdev/",
  },
];
