import { redirect } from "next/navigation";
import PokemonList from "../components/PokemonList/PokemonList";
import { Input } from "../components/ui/Input/Input";
import { getPokemonList } from "../pokemon";
import { revalidatePath } from "next/cache";

const onSubmit = async (formData: FormData) => {
  "use server";
  const query = formData.get("query");
  const queryParam = query ? `?query=${query}` : "";
  redirect(`/search${queryParam}`);
};
export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchQuery = searchParams.query?.toString().toLowerCase();
  const pokemnoList = await getPokemonList(10, searchQuery);
  return (
    <div className="w-full h-full flex flex-col gap-2  p-2">
      <form className="p-2 flex flex-row gap-2" action={onSubmit}>
        <Input className="text-black md:w-full w-[200px]" name="query" />
        <button
          className={"bg-blue-400 rounded-lg text-nowrap px-4 py-2"}
          type="submit"
        >
          search pokemons
        </button>
      </form>
      <PokemonList pokemons={pokemnoList} />
    </div>
  );
}
