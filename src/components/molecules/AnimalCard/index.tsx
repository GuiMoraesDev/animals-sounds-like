import { Animal } from "@/context/animals/types";
import { useRef } from "react";

type Props = {
  animal: Animal;
  handleDeleteAnimal: () => void;
};

export function AnimalCard({ animal, handleDeleteAnimal }: Props) {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const handleShowAnimalSound = () => {
    ref.current?.classList.toggle("opacity-0");
    ref.current?.classList.toggle("opacity-100");
  };

  const ANIMAL_STYLE = {
    pig: {
      card: "border-pink-300",
      text: "text-pink-300",
      button: "bg-pink-300",
    },
    cow: {
      card: "border-black",
      text: "text-black",
      button: "bg-white",
    },
    sheep: {
      card: "border-blue-950",
      text: "text-blue-950",
      button: "bg-blue-950 text-white",
    },
  };

  return (
    <div
      className={`flex group border-2 py-4 px-8 gap-2 items-center justify-between rounded-sm ${
        ANIMAL_STYLE[animal.type].card
      }`}
    >
      <section className="flex flex-col gap-4">
        <p className={ANIMAL_STYLE[animal.type].text}>
          {animal.name} the {animal.type}
        </p>

        <div className="flex gap-6">
          <button
            onClick={handleShowAnimalSound}
            className={`border-2 border-black p-1 shadow-[2px_2px_0px_#000] ${
              ANIMAL_STYLE[animal.type].button
            }`}
          >
            Make noise
          </button>

          <button
            onClick={handleDeleteAnimal}
            className={`opacity-0 border-2 border-black p-1 shadow-[2px_2px_0px_#000] ${
              ANIMAL_STYLE[animal.type].button
            } group-hover:opacity-100 transition-all`}
          >
            Delete
          </button>
        </div>
      </section>

      <p
        className={`transition-all opacity-0 duration-300 ${
          ANIMAL_STYLE[animal.type].text
        }`}
        ref={ref}
      >
        {animal.sound}
      </p>
    </div>
  );
}
