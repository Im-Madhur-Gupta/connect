import { useHuddle01 } from "@huddle01/react";

import Heading from "@/components/ui/Heading";
import TypingAnimation from "@/components/animations/TypingAnimation";
import LandingAnimation from "@/components/animations/LandingAnimation";
import Button from "@/components/ui/Button";

export default function Home() {
  const { isInitialized } = useHuddle01();

  return (
    <main className="landing-page flex items-center justify-around px-16">
      <div className="flex flex-col justify-evenly items-center">
        <Heading additionalClassNames="text-8xl">Connect</Heading>
        <TypingAnimation />
        <Button
          additionalClassNames="mt-16"
          onClick={() => {
            console.log("click");
          }}
        >
          Get Started
        </Button>
      </div>
      <LandingAnimation />
    </main>
  );
}
