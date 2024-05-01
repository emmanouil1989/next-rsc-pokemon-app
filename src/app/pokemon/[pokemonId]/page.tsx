import { PokemonDetails } from "@/app/components/PokemonDetails/PokemonDetails";

export default function PokemenoDetailsPage({
  params,
}: {
  params: { pokemonId: string };
}) {
  return <PokemonDetails pokemonId={parseInt(params.pokemonId)} />;
}
