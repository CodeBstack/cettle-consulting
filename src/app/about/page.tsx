import type { Metadata } from "next";
import Image from "next/image";
import { AboutIntro } from "./components/AboutIntro";
import { VisionMission } from "./components/VisionMission";
import { Values } from "./components/Values";
import { Team } from "./components/Team";
import { Practices } from "./components/Practices";
import { HowToWork } from "./components/HowToWork";
// import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    
      <main>
        <AboutIntro />
        <VisionMission />
        <Values />
        <Team />
        <Practices />
        <HowToWork/>
      </main>
     
  );
}
