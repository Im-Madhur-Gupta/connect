import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-primary py-3 px-5">
      <Link href="/" className="flex items-center">
        <Image width={75} src={logo} alt="connect" />
        <h1 className="text-4xl text-primary ml-3.5">Connect</h1>
      </Link>
      <Link href="/about">
        <h2 className="text-2xl text-primary">About</h2>
      </Link>
    </header>
  );
};

export default Header;
