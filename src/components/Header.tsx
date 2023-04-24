import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import Heading from "./ui/Heading";
import SubHeading from "./ui/SubHeading";

const Header = () => {
  return (
    <header className="h-[13vh] flex items-center justify-between px-16">
      <Link href="/">
        <Heading additionalClassNames="ml-3.5">Connect</Heading>
      </Link>
      <div className="flex items-center gap-x-16">
        <Link href="/about">
          <SubHeading>About</SubHeading>
        </Link>
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
