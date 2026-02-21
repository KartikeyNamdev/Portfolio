import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import PersonalAvatar from "./PersonalAvatar";

const Footer = () => {
  return (
    <footer
      className="relative w-full py-20 flex flex-col items-center justify-center overflow-hidden"
      id="contact"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-10">
            <PersonalAvatar />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Ready to take <span className="text-blue-600">your</span> digital
            architecture to the next level?
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Reach out to me today and let&apos;s discuss how I can help you
            build scalable, high-performance systems.
          </p>
          <a href="mailto:kartikeynamdev2003@gmail.com">
            <MagicButton
              title="Let's build together"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xl shadow-blue-200"
            />
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-slate-500">
            Copyright © 2026 Kartikey Namdev
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/kartikeyNamdev"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              Github
            </a>
            <a
              href="https://x.com/_KartikeyNamdev"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/kartikey-namdev/"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
