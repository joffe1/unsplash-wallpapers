import Link from "next/link";
import { nav } from "../../src/consts/nav";
import strings from "../../src/consts/strings";

const Footer = () => {
  return (
    <footer className="bg-black p-4">
      <div className="mx-auto max-w-screen-xl shadow md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          {`© ${new Date().getFullYear()} ${strings.allRightsReserved}`}
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          {nav.map((item) => (
            <li key={item.title}>
              <Link href={item.link} className="mr-4 hover:underline md:mr-6 ">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
