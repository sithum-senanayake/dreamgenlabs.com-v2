"use client";

import { useEffect, useState } from "react";

import DifferentiatorsSection from "@/components/home/differentiators-Section";
import GallerySection from "@/components/common/gallery/gallery-selection";
import GlobalEffects from "@/components/common/effects/global-effects";
import HeroSection from "@/components/home/hero-section";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeroSection isVisible={isVisible} />
      <GallerySection />
      <GlobalEffects />
      {/* <WhyUsSection isVisible={isVisible} /> */}
      <DifferentiatorsSection />
      <Testimonials />
    </>
  );
}
