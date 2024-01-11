import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <nav className="flex fixed bg-gray-700 text-white w-full ps-5 items-center  top-0">
      <h1>Navbar</h1>
      <div className="flex justify-between items-center w-full">
        <ul className="flex ml-3">
          <Link href="/">
            <li
              className={`m-3 ${
                pathName == "/" ? "text-blue-300" : "text-white"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`m-3 ${
                pathName == "/about" ? "text-blue-300" : "text-white"
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`m-3 ${
                pathName == "/about/profile" ? "text-blue-300" : "text-white"
              }`}
            >
              Profile
            </li>
          </Link>
        </ul>
        <button
          className="rounded-md bg-white text-black m-3 w-16 h-7 font-bold"
          onClick={() => {
            router.push("/login");
          }}
        >
          Log In
        </button>
      </div>
    </nav>
  );
}
