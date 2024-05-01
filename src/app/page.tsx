import Link from "next/link";
import { getPokemonList } from "./pokemon";
import PokemonList from "@/app/components/PokemonList/PokemonList";

export default async function Home() {
  const pokemons = await getPokemonList();
  return <PokemonList pokemons={pokemons} />;
}
