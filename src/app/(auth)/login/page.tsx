"use client";
import Link from "next/link";

export default function LoginPages() {
  const handleLogin = (e: any) => {
    e.preventDefault();
    fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      }),
    });
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-neutral-600 z-0">
      <form
        className="h-auto w-1/4 text-white bg-gray-700 rounded-md"
        onSubmit={(e) => handleLogin(e)}
      >
        <h1 className="text-2xl text-center font-bold mt-5">Login</h1>
        <div className="m-5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md shadow-sm h-10 text-black"
          />
        </div>
        <div className="m-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md shadow-sm h-10 text-black"
          />
        </div>
        <div className="m-5 mt-10">
          <button type="submit" className="bg-blue-600 w-full rounded-md h-10">
            Login to your Account
          </button>
        </div>
        <div className="m-5">
          <p className="text-center w-full">
            Not Registered?{" "}
            <Link href="/register" className="text-blue-400">
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
