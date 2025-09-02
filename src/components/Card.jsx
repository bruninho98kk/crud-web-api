import Image from "next/image";
import Link from "next/link";

export default function Card({ beer }) {
  // Gera um teor alcoólico aleatório entre 4.0% e 12.0%
  function getRandomAbv() {
    return (Math.random() * 8 + 4).toFixed(1) + "%";
  }

  return (
    <div className="card-beer w-full max-w-xs mx-auto flex flex-col items-center gap-2 bg-yellow-50/80 border-2 border-yellow-300 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-yellow-400/60 transition-all duration-300 ease-out relative overflow-hidden group">
      <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-yellow-200/80 text-yellow-900 text-xs font-bold rounded shadow group-hover:bg-yellow-400/90 transition-all">
        #{beer.id}
      </div>
      <div className="absolute top-0 left-0 m-2 px-2 py-1 bg-yellow-300/80 text-yellow-900 text-xs font-bold rounded shadow group-hover:bg-yellow-500/90 transition-all animate-bounce">
        ⭐ Destaque
      </div>
      <Image
        src={beer.image || "/file.svg"}
        alt={beer.name}
        width={140}
        height={140}
        className="rounded-xl object-contain bg-yellow-100 border-4 border-yellow-400 shadow-2xl group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300"
      />
      <h2 className="font-bold text-2xl text-yellow-900 text-center mt-2 mb-1 drop-shadow group-hover:text-yellow-700 transition-colors duration-200 tracking-wide">
        {beer.name.replace(/\bAle\b/i, "ALE Supreme")}
      </h2>
      <p className="text-sm text-yellow-800">Tipo: <span className="font-semibold uppercase tracking-wider text-yellow-900">{beer.style ? beer.style.replace(/Ale/i, "ALE") : "ALE"}</span></p>
      <p className="text-sm text-yellow-800">Teor alcoólico: <span className="font-semibold text-yellow-900">{beer.abv || getRandomAbv()}</span></p>
      {beer.description && (
        <p className="text-xs text-gray-700 line-clamp-2 text-center mt-1 italic group-hover:line-clamp-none group-hover:bg-yellow-100/60 group-hover:p-2 rounded transition-all duration-300">
          {beer.description}
        </p>
      )}
      <Link
        href={`/ale/${beer.id}`}
        className="btn-main mt-2 w-full text-center group-hover:scale-105 group-active:scale-95 group-hover:bg-yellow-400/80 group-hover:text-yellow-900 animate-pulse"
      >
        Ver Detalhes
      </Link>
      <div className="absolute bottom-0 left-0 right-0 py-1 bg-yellow-200/60 text-yellow-900 text-xs text-center font-semibold tracking-widest shadow-inner animate-fade-in">
        Cerveja exclusiva 2TDS2
      </div>
    </div>
  );
}
