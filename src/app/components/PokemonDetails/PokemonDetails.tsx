"use-client";

import { Pokemon } from "@/app/types";
import { use } from "react";
import Image from "next/image";

const testFunction = async (
  id: number
): Promise<{ pokemonDetails: Pokemon }> => {
  try {
    const res = await fetch(`http://localhost:3000/api/pokemon/${id}`, {
      cache: "no-cache",
    });
    return await res.json();
  } catch (e: any) {
    throw new Error(e);
  }
};

export function PokemonDetails({ pokemonId }: { pokemonId: number }) {
  const pokemonData = use(testFunction(pokemonId));
  const { image, species, stats, moves, name } = pokemonData.pokemonDetails;
  return (
    <div className="flex  gap-4 flex-col  md:flex-row items-center">
      <Image src={image} alt={name} width={400} height={400} priority />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex flex-col gap-2">
          <KeyValue label="species" value={species} />
          <KeyValue label="stats" value={stats} />
          <KeyValue label="moves" value={moves} />
        </div>
      </div>
    </div>
  );
}

type KeyValueProps = {
  label: string;
  value: string;
};

function KeyValue({ label, value }: KeyValueProps) {
  return (
    <div className="flex gap-2 text-xl">
      <span className="font-light">{label}:</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
