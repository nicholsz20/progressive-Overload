import React, { useEffect, useState } from "react";
import { MyContext } from "../Context/ContextProvider";
import { ExerciseMax } from "../Types/GlobalTypes";

export default function WorkoutOverview() {
    // Grabbing state and functions from ContextProvider
    const { edit, setEdit, currentWeek, setCurrentWeek } =
      React.useContext(MyContext);
  
    // Initialize exercises with saved data from localStorage or default values
    const [exercises, setExercises] = useState<ExerciseMax[]>(() => {
      const saved = localStorage.getItem("exerciseData");
      const initialData = [
        { id: "1", name: "Bench Press", max: 160, percentages: [40, 50, 60, 70, 85], increment: 5 },
        { id: "2", name: "Stiff Leg Deadlift", max: 150, percentages: [40, 50, 60, 73, 83], increment: 10 },
        { id: "3", name: "Barbell Row", max: 100, percentages: [40, 50, 60, 70, 85], increment: 5 },
        { id: "4", name: "Incline Bench Press", max: 0, percentages: [40, 50, 60, 70, 85], increment: 5 },
      ];
      return saved ? JSON.parse(saved) : initialData;
    });
  
    // Save exercises to localStorage whenever they change
    useEffect(() => {
      localStorage.setItem("exerciseData", JSON.stringify(exercises));
    }, [exercises]);
  
    // Update the `max` value for a specific exercise
    const handleUpdateMax = (id: string, newMax: number) => {
      setExercises(
        exercises.map((exercise) =>
          exercise.id === id ? { ...exercise, max: newMax } : exercise
        )
      );
    };
  
    // Update the weekly increment for a specific exercise
    const handleUpdateIncrement = (id: string, newIncrement: number) => {
      setExercises(
        exercises.map((exercise) =>
          exercise.id === id ? { ...exercise, increment: newIncrement } : exercise
        )
      );
    };
  
    // Calculate adjusted weight based on percentage and weekly increment
    const calculateWeight = (
      max: number,
      percentage: number,
      week: number,
      increment: number
    ) => {
      const baseWeight = max * (percentage / 100); // Calculate weight from percentage
      const totalWeight = baseWeight + increment * (week - 1); // Add weekly increment
      return Math.round(totalWeight / 5) * 5; // Round to nearest multiple of 5
    };
  
    return (
      <>
        {exercises.map((exercise) => (
          <div key={exercise.id} className="exercise-container">
            <div>
              <h2 className="exercise-header">{exercise.name}</h2>
              {edit && (
                <div className="items">
                  <div>
                    <label className="max-label">Max:</label>
                    <input
                      type="number"
                      value={exercise.max}
                      onChange={(e) =>
                        handleUpdateMax(exercise.id, Number(e.target.value))
                      }
                      className="max-input"
                    />
                  </div>
                  <div>
                    <label className="weekly-header">Weekly Increment:</label>
                    <input
                      type="number"
                      value={exercise.increment}
                      onChange={(e) =>
                        handleUpdateIncrement(exercise.id, Number(e.target.value))
                      }
                      className="weekly-increment"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </>
    );
  }
  