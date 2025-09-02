import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <section className="section-box flex flex-col items-center">
        <h1 className="text-3xl font-bold text-yellow-900 mb-2 drop-shadow">Página não encontrada 😢</h1>
        <p className="text-gray-700 mb-4">O conteúdo que você procura não foi encontrado ou ocorreu um erro.</p>
        <Link href="/" className="btn-main">Voltar para a Home</Link>
      </section>
    </main>
  );
}
