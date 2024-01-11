import Link from "next/link";

export default function RegisterPages() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-neutral-600">
      <div className="h-auto w-1/4 text-white bg-gray-700 rounded-md">
        <h1 className="text-2xl text-center font-bold mt-5">Login</h1>
        <div className="m-5">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="w-full rounded-md shadow-sm h-10" />
        </div>
        <div className="m-5">
          <label htmlFor="email">Email</label>
          <input type="email" className="w-full rounded-md shadow-sm h-10" />
        </div>
        <div className="m-5">
          <label htmlFor="password">Password</label>
          <input type="password" className="w-full rounded-md shadow-sm h-10" />
        </div>
        <div className="m-5 mt-10">
          <button type="submit" className="bg-blue-600 w-full rounded-md h-10">
            Login to your Account
          </button>
        </div>
        <div className="m-5">
          <p className="text-center w-full">
            Have Account?{" "}
            <Link href="/login" className="text-blue-400">
              Login your Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
