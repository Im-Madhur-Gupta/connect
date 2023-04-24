import { useHuddle01 } from "@huddle01/react";
import { useRouter } from "next/router";

import Heading from "@/components/ui/Heading";
import TypingAnimation from "@/components/animations/TypingAnimation";
import LandingAnimation from "@/components/animations/LandingAnimation";
import Button from "@/components/ui/Button";

export default function Home() {
  const { isInitialized } = useHuddle01();
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/get-started");
  };

  return (
    <main className="h-page-container flex items-center justify-around px-16">
      <div className="flex flex-col justify-evenly items-center">
        <Heading additionalClassNames="text-8xl">Connect</Heading>
        <TypingAnimation />
        <Button
          isDisabled={!isInitialized}
          additionalClassNames="mt-16"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </div>
      <LandingAnimation />
    </main>
  );
}
