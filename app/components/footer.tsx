import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision";

const Footer = () => {
  return (
    <footer
      className="absolute w-full min-h-screen flex items-center justify-center "
      id="contact"
    >
      {/* background grid */}
      <BackgroundBeamsWithCollision>
        <div className="relative w-full max-w-8xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="mb-4  lg:text-2xl font-bold text-white">
              Ready to take <span className="text-purple">your</span> digital
              presence to the next level?
            </h1>
            <p className="text-white-200 max-w-xl mx-auto mb-10 text-center">
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </p>
            <a href="mailto:kartikeynamdev2003@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          {/* Copyright in bottom right corner */}
        </div>
        <p className="absolute bottom-4 right-4 text-sm font-light opacity-70">
          Copyright © 2025 Kartikey Namdev
        </p>
      </BackgroundBeamsWithCollision>
    </footer>
  );
};

export default Footer;
