import { createContext, useContext, useState } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [userHabits, setUserHabits] = useState([]);

  return (
    <HabitsContext.Provider value={{ userHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
