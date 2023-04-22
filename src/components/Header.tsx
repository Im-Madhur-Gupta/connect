import Link from "next/link";

import Heading from "./ui/Heading";
import SubHeading from "./ui/SubHeading";

const Header = () => {
  return (
    <header className="header flex items-center justify-between px-16">
      <Link href="/">
        <Heading additionalClassNames="ml-3.5">Connect</Heading>
      </Link>
      <Link href="/about">
        <SubHeading>About</SubHeading>
      </Link>
    </header>
  );
};

export default Header;
