import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(80rem_40rem_at_50%_-10%,rgba(79,70,229,0.18),transparent_60%),radial-gradient(50rem_30rem_at_10%_20%,rgba(245,158,11,0.14),transparent_55%)] text-gray-900">
      
      {/* Global navbar (same as inner pages) */}
      <Navbar />

      {/* Home content */}
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <Outlet />
      </div>
    </div>
  );
}
