import { AnimalCard } from "@/components/molecules/AnimalCard";
import { useAnimalsData } from "@/context/animals/context";
import React from "react";

export function AnimalsView() {
  const { animals } = useAnimalsData();

  return (
    <div style={{ maxWidth: 800 }}>
      <h1 className="text-4xl mb-8">Animals</h1>

      <ul className="flex flex-col gap-4">
        {animals.map((animal) => (
          <li key={animal.id}>
            <AnimalCard animal={animal} />
          </li>
        ))}
      </ul>
    </div>
  );
}
