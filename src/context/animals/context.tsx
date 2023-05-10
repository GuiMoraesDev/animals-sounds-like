import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Animal } from "./types";
import { initialAnimals } from "./data";

type AnimalDataContextProps = {
  animals: Animal[];
};

const AnimalDataContext = createContext({} as AnimalDataContextProps);

export function AnimalDataProvider({ children }: PropsWithChildren) {
  const [data, setData] =
    useState<AnimalDataContextProps["animals"]>(initialAnimals);

  return (
    <AnimalDataContext.Provider value={{ animals: data }}>
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
