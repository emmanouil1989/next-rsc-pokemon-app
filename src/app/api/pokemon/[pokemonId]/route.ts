import { getPokemonDetails } from "@/app/pokemon";

export async function GET(
  request: Request,
  { params }: { params: { pokemonId: string } }
) {
  try {
    const pokemonDetails = await getPokemonDetails(parseInt(params.pokemonId));

    return Response.json({ pokemonDetails });
  } catch (error: any) {
    throw new Error(error);
  }
}
