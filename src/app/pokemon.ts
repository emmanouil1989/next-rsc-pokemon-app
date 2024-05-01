import { Pokemon } from "./types";

const capitalizeFirstLetter = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
const summarizePokemon = (pokemon: any): Pokemon => {
  return {
    id: pokemon.id,
    name: capitalizeFirstLetter(pokemon.name),
    image:
      pokemon.sprites?.other?.["official-artwork"]?.front_default ||
      pokemon.sprites.front_default,
    species: pokemon.species.name,
    types: pokemon.types
      .slice(0, 10)
      .map((s: any) => s.type.name)
      .join(", "),
    stats: pokemon.stats
      .slice(0, 10)
      .map((s: any) => `${s.stat.name}: ${s.base_stat}`)
      .join(", "),
    moves: pokemon.moves
      .slice(0, 10)
      .map((m: any) => m.move.name)
      .join(", "),
  };
};

export const getPokemonList = async (
  limit: number = 10,
  query?: string
): Promise<Array<Pokemon>> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${
      query ? 10000 : limit || 10
    }&offset=0`
  );

  const json = await response.json();
  let results: Array<any> = json.results;
  if (query) {
    results = results.filter(({ name }: { name: string }) => {
      return name.includes(query);
    });
  }

  return await Promise.all(
    results.slice(0, limit).map(async ({ url }: { url: string }) => {
      const response = await fetch(url);
      return summarizePokemon(await response.json());
    })
  );
};

export async function getPokemonDetails(pokemonId: number) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  return summarizePokemon(await resp.json());
}
