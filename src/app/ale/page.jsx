"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PAGE_SIZE = 8;
const MAX_PAGES = 10;

export default function AleList() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.sampleapis.com/beers/ale")
      .then((res) => {
        // Filtra apenas cervejas com imagem válida
        const beersWithImage = res.data.filter(
          (b) => b.image && b.image !== "" && !b.image.endsWith(".svg")
        );
        setBeers(beersWithImage);
        toast.success("Cervejas carregadas com sucesso!");
      })
      .catch(() => {
        setError("Erro ao carregar cervejas.");
        toast.error("Erro ao carregar cervejas.");
      })
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.min(Math.ceil(beers.length / PAGE_SIZE), MAX_PAGES);
  const beersToShow = beers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <main className="flex flex-col items-center min-h-screen bg-transparent">
      <Header />
      <ToastContainer />
      <section className="section-box mt-14 max-w-6xl w-full flex flex-col items-center animate-fade-in gap-8">
        <h1 className="text-3xl font-extrabold text-yellow-900 mb-4 drop-shadow-xl text-center">Cervejas Ale</h1>
        {loading && <p className="text-yellow-900 text-lg animate-pulse">Carregando...</p>}
        {error && <p className="text-red-600 text-lg">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
          {beersToShow.map((beer) => (
            <Card key={beer.id} beer={beer} />
          ))}
        </div>
        <div className="flex gap-4 mt-8 justify-center items-center">
          <button
            className="btn-main disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Anterior
          </button>
          <span className="px-2 text-yellow-900 font-semibold text-lg">Página {page} de {totalPages}</span>
          <button
            className="btn-main disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Próxima
          </button>
        </div>
      </section>
    </main>
  );
}
