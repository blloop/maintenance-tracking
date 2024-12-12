import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <Link href="/" className="text-2xl font-bold">MyMaintenance</Link>
      </div>
    </header>
  );
}
