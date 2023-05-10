import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Animal } from "./types";
import { initialAnimals } from "./data";

type AnimalDataContextProps = {
  animals: Animal[];
  deleteAnimalById: (id: number) => void;
};

const AnimalDataContext = createContext({} as AnimalDataContextProps);

export function AnimalDataProvider({ children }: PropsWithChildren) {
  const [data, setData] =
    useState<AnimalDataContextProps["animals"]>(initialAnimals);

  const deleteAnimalById = (id: number) => {
    setData((state) => state.filter((animal) => animal.id !== id));
  };

  return (
    <AnimalDataContext.Provider value={{ animals: data, deleteAnimalById }}>
      {children}
    </AnimalDataContext.Provider>
  );
}

export function useAnimalsData() {
  const context = useContext(AnimalDataContext);

  if (!context) {
    throw new Error(
      "DEV Alert: useAnimalsData must be used whithin a AnimalDataProvider"
    );
  }

  return context;
}
