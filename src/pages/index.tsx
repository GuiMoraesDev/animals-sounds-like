import React from "react";
import { AnimalsView } from "./animals";
import { AnimalDataProvider } from "@/context/animals/context";

export default function Home() {
  return (
    <AnimalDataProvider>
      <main className={`min-h-screen p-24`}>
        <AnimalsView />
      </main>
    </AnimalDataProvider>
  );
}
