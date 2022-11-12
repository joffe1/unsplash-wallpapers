import Link from 'next/link';
import { nav } from '../../src/consts/nav';

const Header = () => {
  return (
    <header>
      <nav className="bg-black p-4">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          {nav.map((item) => (
            <Link
              href={item.link}
              className="mr-2 rounded bg-white px-2 py-1"
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
