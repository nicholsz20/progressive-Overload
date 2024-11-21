import React, { useEffect, useState } from "react";
import { MyContext } from "../Context/ContextProvider";

interface ExerciseMax {
  id: string;
  name: string;
  max: number;
  percentages: number[];
  increment: number;
}
export default function WorkoutOverview() {
    const { edit, setEdit, currentWeek, setCurrentWeek } = React.useContext(MyContext);

  const [exercises, setExercises] = useState<ExerciseMax[]>(() => {
    const saved = localStorage.getItem("exerciseData");
    const initialData = [
      {
        id: "1",
        name: "Bench Press",
        max: 160,
        percentages: [40, 50, 60, 70, 85],
        increment: 5,
      },
      {
        id: "2",
        name: "Stiff Leg Deadlift",
        max: 150,
        percentages: [40, 50, 60, 73, 83],
        increment: 10,
      },
      {
        id: "3",
        name: "Barbell Row",
        max: 100,
        percentages: [40, 50, 60, 70, 85],
        increment: 5,
      },
      {
        id: "4",
        name: "Incline Bench Press",
        max: 0,
        percentages: [40, 50, 60, 70, 85],
        increment: 5,
      },
    ];
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("exerciseData", JSON.stringify(exercises));
  }, [exercises]);

  const handleUpdateMax = (id: string, newMax: number) => {
    setExercises(exercises.map(exercise => 
        exercise.id === id 
        ? { ...exercise, max: newMax}
        : exercise
        ))
  }

  const handleUpdateIncrement = (id: string, newIncrement: number) => {
    setExercises(exercises.map(exercise =>
        exercise.id === id
        ? { ...exercise, increment: newIncrement}
        : exercise 
        ))
  }

  const calculateWeight = (
    max: number,
    percentage: number,
    week: number,
    increment: number
  ) => {
    // Calculate base weight from percentage
    const baseWeight = max * (percentage / 100);
    // Add weekly increment
    const totalWeight = baseWeight + increment * (week - 1);
    // Round to nearest 5
    return Math.round(totalWeight / 5) * 5;
  };

  return (
  <>
  {exercises.map(exercise => (
    <div key={exercise.id} className="exercise-container">
        <div className="">
            <h2 className="exercise-header">{exercise.name}</h2>
            {edit && (
                <div className="items">
                        <div>
                            <label className="max-label">
                                Max:
                            </label>
                            <input type="number" value={exercise.max} onChange={(e) => handleUpdateMax(exercise.id, Number(e.target.value))} className="max-input"/>
                        </div>
                        <div>
                            <label className="weekly-header">Weekly Increment:</label>
                            <input type="number" value={exercise.increment} onChange={(e) => handleUpdateIncrement(exercise.id, Number(e.target.value))} className="weekly-increment" />
                        </div>
                </div>
            )}
        </div>
    </div>
    ))}
    </>
    );
}
