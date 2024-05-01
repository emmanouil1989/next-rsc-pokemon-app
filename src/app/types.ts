import { z } from "zod";

const pokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  species: z.string(),
  types: z.string(),
  stats: z.string(),
  moves: z.string(),
});

export type Pokemon = z.infer<typeof pokemonSchema>;
