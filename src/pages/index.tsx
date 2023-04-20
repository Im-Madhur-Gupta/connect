import { useHuddle01 } from "@huddle01/react";
import { useEffect } from "react";

export default function Home() {
  const { isInitialized, initialize } = useHuddle01();

  useEffect(() => {
    console.log(
      "process.env.NEXT_PUBLIC_PROJECT_ID",
      process.env.NEXT_PUBLIC_PROJECT_ID
    );

    if (process.env.NEXT_PUBLIC_PROJECT_ID) {
      initialize(process.env.NEXT_PUBLIC_PROJECT_ID);
    }
  }, []);
  return (
    <main>
      Meeting App
      <div>{isInitialized ? "Hello World!" : "Please initialize"}</div>
    </main>
  );
}
