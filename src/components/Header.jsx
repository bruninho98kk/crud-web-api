import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-col sm:flex-row justify-between items-center p-6 bg-gradient-to-r from-yellow-900 via-yellow-700 to-yellow-600 text-white shadow-2xl sticky top-0 z-30 gap-2 border-b-4 border-yellow-400">
      <div className="font-extrabold text-2xl tracking-tight drop-shadow-lg flex items-center gap-3">
        <span className="inline-block w-8 h-8 bg-yellow-400 rounded-full shadow-inner animate-pulse border-2 border-yellow-200"></span>
        <span className="tracking-widest">Turma Next.js 15</span>
      </div>
      <nav className="flex gap-6 text-lg font-semibold mt-2 sm:mt-0">
        <Link href="/" className="hover:underline underline-offset-8 transition-all duration-150 hover:text-yellow-300 focus:text-yellow-200">Home</Link>
        <Link href="/apiinfo" className="hover:underline underline-offset-8 transition-all duration-150 hover:text-yellow-300 focus:text-yellow-200">Sobre a API</Link>
        <Link href="/ale" className="hover:underline underline-offset-8 transition-all duration-150 hover:text-yellow-300 focus:text-yellow-200">Cervejas Ale</Link>
      </nav>
    </header>
  );
}
