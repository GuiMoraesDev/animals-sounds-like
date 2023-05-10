import { useAnimalsData } from "@/context/animals/context";
import React from "react";

export function AnimalsView() {
  const { animals } = useAnimalsData();

  return (
    <div style={{ maxWidth: 800 }}>
      <ul className="list-disc">
        {animals.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
}
