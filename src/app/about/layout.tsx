import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ul className="fixed right-0 t-0 z-10 h-screen w-60 bg-gray-700">
        <Link href="/">
          <li className="m-3 text-blue-300">Home</li>
        </Link>
        <Link href="/about">
          <li className="m-3 text-blue-300">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="m-3 text-blue-300">Profile</li>
        </Link>
      </ul>
      <div>{children}</div>
    </div>
  );
}
