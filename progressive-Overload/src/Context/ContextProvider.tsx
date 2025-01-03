import { createContext, ReactNode, useState } from 'react';
import { MyContextProviderProps } from '../Types/GlobalTypes';



// Create the context
export const MyContext = createContext();

// Create the provider component
export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  // Define multiple states
  const [edit, setEdit] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Define values to share via context
  const contextValue = {
    edit,
    setEdit,
    isAuthenticated,
    setIsAuthenticated,
    currentWeek,
    setCurrentWeek
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
