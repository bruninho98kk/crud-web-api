import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Página não encontrada
      </p>
      <p className="mt-2 text-gray-600">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <Link href="/">
        <a className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Voltar para a página inicial
        </a>
      </Link>
    </div>
  );
}
