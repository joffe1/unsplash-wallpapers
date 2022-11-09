import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="bg-black p-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="px-2 py-1 mr-2 bg-white rounded">
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
