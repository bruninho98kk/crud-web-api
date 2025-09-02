import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-transparent">
      <Header />
      <section className="section-box flex flex-col items-center gap-8 mt-14 w-full max-w-2xl shadow-2xl border-yellow-400 animate-fade-in">
        <Image
          src="/img/unnamed.jpg"
          alt="Avatar do aluno"
          width={130}
          height={130}
          className="rounded-full border-4 border-yellow-900 shadow-2xl bg-yellow-100 mb-2 animate-bounce-slow"
        />
        <h1 className="text-5xl font-extrabold text-yellow-900 mb-1 text-center drop-shadow-xl tracking-tight">Turma 2TDS2</h1>
        <h2 className="text-2xl text-yellow-800 mb-2 text-center font-semibold">Escola SENAI-Valinhos</h2>
        <span className="font-bold text-xl text-yellow-900 mb-2">Bruno Rodrigues Quintino da Silva</span>
        <blockquote className="italic text-yellow-700 mt-2 text-center max-w-md border-l-4 border-yellow-900 pl-4 bg-yellow-50/70 rounded-lg shadow-inner py-3 px-4 text-lg">
          "O sucesso é a soma de pequenos esforços repetidos dia após dia." <br />
          <span className="text-xs text-yellow-900">– Robert Collier</span>
        </blockquote>
        <Link href="/ale" className="btn-main mt-4 shadow-xl text-lg">Ver cervejas Bruno</Link>
      </section>
    </main>
  );
}
