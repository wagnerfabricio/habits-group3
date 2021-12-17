import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useUser } from "./user";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [userHabits, setUserHabits] = useState(() => {
    const habits = localStorage.getItem("@habits:userHabits");

    if (habits) {
      return JSON.parse(habits);
    }

    return [];
  });

  const { userData } = useUser();

  const getHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((response) => {
        setUserHabits(response.data);
        localStorage.setItem(
          "@habits:userHabits",
          JSON.stringify(response.data)
        );
      });
  };

  const createHabit = (data) => {
    api
      .post(`/habits/`, data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((_) => {
        getHabits();
        toast.success("Hábito criado com sucesso");
      })
      .catch((_) => toast.error("Erro inesperado..."));
  };

  const editHabit = (data, habitId) => {
    api
      .patch(`/habits/${habitId}/`, data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((_) => {
        getHabits();
        toast.success("Hábito alterado com sucesso");
      })
      .catch((_) => toast.error("Erro inesperado..."));
  };

  const deleteHabit = (habitId) => {
    api
      .delete(`/habits/${habitId}/`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((_) => {
        getHabits();
        toast.success("Hábito excluído");
      })
      .catch((_) => toast.error("Hábito já deletado"));
  };

  useEffect(() => {
    getHabits();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HabitsContext.Provider
      value={{ userHabits, createHabit, getHabits, editHabit, deleteHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
