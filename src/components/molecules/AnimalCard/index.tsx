import { Animal } from "@/context/animals/types";
import { useRef } from "react";

type Props = {
  animal: Animal;
};

export function AnimalCard({ animal }: Props) {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const handleShowAnimalSound = () => {
    ref.current?.classList.toggle("opacity-0");
    ref.current?.classList.toggle("opacity-100");
  };

  return (
    <div
      className={`flex border-2 py-4 px-8 gap-2 items-center justify-between rounded-sm ${
        animal.type === "pig" && "border-pink-300"
      } ${animal.type === "cow" && "border-black"} ${
        animal.type === "sheep" && "border-blue-950"
      }`}
    >
      <section className="flex flex-col gap-4">
        <p
          className={`${animal.type === "pig" && "text-pink-300"} ${
            animal.type === "cow" && "text-black"
          } ${animal.type === "sheep" && "text-blue-950"}`}
        >
          {animal.name} the {animal.type}
        </p>

        <button
          onClick={handleShowAnimalSound}
          className={`border-2 border-black p-1 shadow-[2px_2px_0px_#000] ${
            animal.type === "pig" && "bg-pink-300"
          } ${animal.type === "cow" && "bg-white"} ${
            animal.type === "sheep" && "bg-blue-950 text-white"
          }`}
        >
          Make noise
        </button>
      </section>

      <p
        className={`transition-all opacity-0 duration-300 ${
          animal.type === "pig" && "text-pink-300"
        } ${animal.type === "cow" && "text-black"} ${
          animal.type === "sheep" && "text-blue-950"
        }`}
        ref={ref}
      >
        {animal.sound}
      </p>
    </div>
  );
}
