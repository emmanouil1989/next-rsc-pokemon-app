import { Pokemon } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

type PokemonListProps = {
  pokemons: Array<Pokemon>;
};
export default function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <ul className="p-2 h-full w-full grid md:grid-cols-4 grid-cols-1 lg:grid-cols-[repeat(7,minmax(0,200px))] justify-items-center gap-4">
      {pokemons.map(({ name, id, image }) => {
        return (
          <Link className="h-full w-full" key={id} href={`/pokemon/${id}`}>
            <li className="shadow-inner shadow-gray-200 gap-4 rounded-lg flex flex-col items-center w-full hover:cursor-pointer">
              <div className="bg-gray-400  rounded-tl-lg rounded-tr-lg  w-full h-full flex justify-center">
                <Image
                  src={image}
                  alt={image}
                  width={100}
                  height={24}
                  priority
                />
              </div>

              <span className="pb-2 px-2 w-full  text-center ">{name}</span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
