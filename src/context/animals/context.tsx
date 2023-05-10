import { PropsWithChildren, createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import { Animal } from "./types";
import { initialAnimals } from "./data";

type AnimalDataContextProps = {
  animals: Animal[];
  deleteAnimalById: (id: number) => void;
  createRandomAnimal: () => void;
};

const AnimalDataContext = createContext({} as AnimalDataContextProps);

export function AnimalDataProvider({ children }: PropsWithChildren) {
  const [data, setData] =
    useState<AnimalDataContextProps["animals"]>(initialAnimals);

  const deleteAnimalById = (id: number) => {
    setData((state) => state.filter((animal) => animal.id !== id));
  };

  const createRandomAnimal = () => {
    setData((state) => {
      const randomName = faker.animal.cow();

      return [
        ...state,
        {
          id: state.length,
          name: randomName,
          sound: "Moo",
          type: "cow",
        },
      ];
    });
  };

  return (
    <AnimalDataContext.Provider
      value={{ animals: data, deleteAnimalById, createRandomAnimal }}
    >
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
