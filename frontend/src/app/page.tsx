"use client";
import Image from "next/image";
import "../styles/globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { Verify } from "@/app/verify";

export default function App() {
  return (
    <main className="transition-all duration-300">
      <Navbar />
      <Verify />
      <Hero />
    </main>
  );
}

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  // use Drawer for mobile menu from bottom
  return (
    <section className="min-h-[10vh] transition-all duration-300 w-full fixed border-b-[1px] flex items-center justify-around bg-gray-50  text-gray-900 dark:text-gray-100 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex justify-center items-center gap-2">
        <Image
          src={`${darkMode ? `/logo-white.svg` : `/logo-black.svg`}`}
          alt="Logo"
          width={40}
          height={40}
        />
        <h1 className="tracking-tight font-black md:text-2xl lg:text-3xl">
          Apart3
        </h1>
      </div>
      <div className="flex justify-center items-center gap-4 font-semibold">
        <button className="px-4 py-2 flex gap-2 justify-center items-center border-2 rounded-lg shadow-sm hover:bg-gray-100 hover:border-brand-black dark:border-gray-700 dark:bg-gray-800 dark:hover:border-brand-white">
          <Image
            src={`${
              darkMode
                ? `/logos/worldcoin-white.svg`
                : `/logos/worldcoin-black.svg`
            }`}
            alt="Logo"
            width={20}
            height={40}
          />
          <h1>Sign In</h1>
        </button>
        {/* <button className="px-4 py-2 transition-all duration-300 border-2 shadow-sm rounded-lg border-brand-primary text-brand-black bg-brand-primary  hover:border-brand-black dark:hover:border-brand-white"></button> */}
        <DarkModeToggle />
      </div>
    </section>
  );
};

/* const NavbarLink: React.FC<{ title: string; children: any }> = ({
  title,
  children,
}) => {
  return (
    <Link className=" hover:underline font-bold" href={`/${title}`}>
      {children}
    </Link>
  );
}; */

const Hero: React.FC = () => {
  return (
    <div className="min-h-[120vh] flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      Here is my hero.
    </div>
  );
};
