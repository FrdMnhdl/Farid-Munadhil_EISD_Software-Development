import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Cihuy Store
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-blue-400">
            Home
          </Link>
          <Link href="/products/ssr" className="text-white hover:text-blue-400">
            SSR Products
          </Link>
          <Link href="/products/ssg" className="text-white hover:text-blue-400">
            SSG Products
          </Link>
        </div>
      </div>
    </nav>
  );
}