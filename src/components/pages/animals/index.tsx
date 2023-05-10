import { AnimalCard } from "@/components/molecules/AnimalCard";
import { useAnimalsData } from "@/context/animals/context";
import React from "react";

export function AnimalsView() {
  const { animals, deleteAnimalById, createRandomAnimal } = useAnimalsData();

  const handleDeleteAnimal = (id: number) => {
    deleteAnimalById(id);
  };

  const handleCreateAnimal = () => {
    createRandomAnimal();
  };

  return (
    <div style={{ maxWidth: 800 }}>
      <h1 className="text-4xl mb-8">Animals</h1>

      <ul className="flex flex-col gap-4">
        {animals.map((animal) => (
          <li key={animal.id}>
            <AnimalCard
              animal={animal}
              handleDeleteAnimal={() => handleDeleteAnimal(animal.id)}
            />
          </li>
        ))}

        <li>
          <button
            onClick={handleCreateAnimal}
            className={`border-2 border-black p-1 shadow-[2px_2px_0px_#000]`}
          >
            Add
          </button>
        </li>
      </ul>
    </div>
  );
}
