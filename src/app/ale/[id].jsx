"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AleDetail({ params }) {
  const { id } = params;
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.sampleapis.com/beers/ale")
      .then((res) => {
        const found = res.data.find((b) => String(b.id) === String(id));
        if (found) {
          setBeer(found);
          toast.success("Detalhes carregados!");
        } else {
          setError("Cerveja não encontrada.");
          toast.error("Cerveja não encontrada.");
        }
      })
      .catch(() => {
        setError("Erro ao buscar detalhes.");
        toast.error("Erro ao buscar detalhes.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <main className="flex flex-col items-center min-h-screen bg-transparent">
        <Header />
        <ToastContainer />
        <p className="mt-10 text-yellow-900">Carregando...</p>
      </main>
    );
  }

  if (error || !beer) {
    return (
      <main className="flex flex-col items-center min-h-screen bg-transparent">
        <Header />
        <ToastContainer />
        <section className="section-box mt-10 p-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold text-yellow-900 mb-2">Erro</h1>
          <p className="text-red-600 mb-4">{error || "Cerveja não encontrada."}</p>
          <Link href="/ale" className="btn-main">Voltar para a lista</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-transparent">
      <Header />
      <ToastContainer />
      <section className="section-box mt-10 max-w-xl w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-yellow-900 mb-2 drop-shadow text-center">{beer.name}</h1>
        <Image
          src={beer.image || "/file.svg"}
          alt={beer.name}
          width={180}
          height={180}
          className="rounded object-contain bg-yellow-50 mb-4 border border-yellow-200 shadow"
        />
        <p className="text-yellow-800 mb-1"><b>Tipo:</b> {beer.style || "Ale"}</p>
        <p className="text-yellow-800 mb-1"><b>Teor alcoólico:</b> {beer.abv || "N/A"}</p>
        {beer.brewery && <p className="text-yellow-800 mb-1"><b>Cervejaria:</b> {beer.brewery}</p>}
        {beer.description && <p className="text-gray-700 mt-2 text-center">{beer.description}</p>}
        <Link href="/ale" className="btn-main mt-6">Voltar para a lista</Link>
      </section>
    </main>
  );
}
