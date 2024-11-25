//File contains all types

//Types used for the array in Workout Overview
export interface ExerciseMax {
    id: string;
    name: string;
    max: number;
    percentages: number[];
    increment: number;
  }

//Type for ContextProvider
export interface MyContextProviderProps {
    children: ReactNode;
  }