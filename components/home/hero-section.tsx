import { ArrowRight } from "lucide-react";
import BackgroundEffects from "../common/effects/background-effects";
import Link from "next/link";

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  return (
    <div className="relative px-8 py-20">
      <BackgroundEffects />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-white">TRANSFORMING</span>
          <br />
          <span className="text-white">DREAMS </span>
          <span className="bg-gradient-to-r from-[#1145be] to-[#00c6ff] text-transparent bg-clip-text">
            INTO REALITY
          </span>
        </h1>

        <p
          className={`text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Welcome To DreamGen Labs. Your Gateway To Innovative Web Development
          And Digital Marketing Solutions. Explore Our Impactful Strategies
          Tailored To Your Needs. Let&apos;s Get Started On Unlocking The Full
          Potential Of Your Online Presence Today.
        </p>

        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link href="/contact" className="inline-block">
            <button className="group relative cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1145be] to-[#00c6ff] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700">
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
