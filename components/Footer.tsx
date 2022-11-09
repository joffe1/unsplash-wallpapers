import Link from "next/link";
import strings from "../src/constants/strings";

const Footer = () => {
  return (
    <footer className="bg-black p-4">
      <div className="mx-auto max-w-screen-xl shadow md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {`© ${new Date().getFullYear()} ${strings.allRightsReserved}`}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
