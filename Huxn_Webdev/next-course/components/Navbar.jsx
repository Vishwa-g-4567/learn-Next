import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="m-2.5">
        <h1>LOGO</h1>
      </div>
      <div>
        <ul className="flex m-2.5 gap-2.5">
          <li>
            <Link href={"/"} className="text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
