import Link from "next/link";
import { nav } from "../src/constants/nav";

const Header = () => {
  return (
    <header>
      <nav className="bg-black p-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {nav.map((item) => (
            <Link
              href={item.link}
              className="px-2 py-1 mr-2 bg-white rounded"
              key={item.title}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
