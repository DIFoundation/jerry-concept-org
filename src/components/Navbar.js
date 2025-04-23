import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">CyberZone</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
