import Image from "next/image";
import Link from "next/link";

export default function Card({ beer }) {
  return (
    <div className="card-beer w-full max-w-xs mx-auto flex flex-col items-center gap-2">
      <Image
        src={beer.image || "/file.svg"}
        alt={beer.name}
        width={120}
        height={120}
        className="rounded object-contain bg-yellow-50 border border-yellow-200 shadow"
      />
      <h2 className="font-bold text-lg text-yellow-900 text-center mt-2 mb-1 drop-shadow">{beer.name}</h2>
      <p className="text-sm text-yellow-800">Tipo: <span className="font-semibold">{beer.style || "Ale"}</span></p>
      <p className="text-sm text-yellow-800">Teor alcoólico: <span className="font-semibold">{beer.abv || "N/A"}</span></p>
      {beer.description && (
        <p className="text-xs text-gray-600 line-clamp-2 text-center mt-1">{beer.description}</p>
      )}
      <Link
        href={`/ale/${beer.id}`}
        className="btn-main mt-2 w-full text-center"
      >
        Detalhes
      </Link>
    </div>
  );
}
