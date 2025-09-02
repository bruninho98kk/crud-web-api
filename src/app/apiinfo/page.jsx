import Header from "../../components/Header";

export default function ApiInfo() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-transparent">
      <Header />
      <section className="section-box mt-14 max-w-2xl w-full animate-fade-in flex flex-col gap-6">
        <h1 className="text-3xl font-extrabold text-yellow-900 mb-2 drop-shadow-xl text-center">Sobre a API</h1>
        <ul className="list-disc ml-6 text-yellow-900 mb-4 text-lg space-y-2">
          <li><b>Nome da API:</b> Sample API de Cervejas Ale</li>
          <li>
            <b>Documentação:</b> <a href="https://sampleapis.com/" target="_blank" className="text-blue-700 underline hover:text-blue-900 transition">https://sampleapis.com/</a>
          </li>
          <li><b>URL base:</b> https://api.sampleapis.com/beers/ale</li>
          <li><b>Endpoint utilizado:</b> /ale</li>
          <li>
            <b>Atributos retornados:</b> id, name, image, style, abv, description, brewery, etc.
          </li>
        </ul>
        <p className="text-yellow-800 text-lg">
          Esta API fornece uma lista de cervejas do estilo Ale, com informações como nome, tipo, teor alcoólico, descrição e imagem.
        </p>
      </section>
    </main>
  );
}
