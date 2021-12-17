import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useUser } from "./user";
import { useUserGroups } from "./userGroups";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const { userGroupsSubscriptions } = useUserGroups();

  const { userData } = useUser();

  const addActivity = (data) => {
    setActivities(data);
    api
      .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(async (response) => {
        userGroupsSubscriptions();
        toast.success(`${data.title} agora é um evento`);
      })
      .catch((error) => toast.error("Erro ao criar evento"));
  };

  const updateActivity = (id, data) => {
    api
      .patch(`/activities/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(async (response) => {
        userGroupsSubscriptions();
        toast.success("Evento atualizado com sucesso");
      })
      .catch((error) =>
        toast.error(
          "Erro ao atualizar este evento. Somente membros do grupo podem alterá-lo."
        )
      );
  };

  const deleteActivity = (id) => {
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(async (response) => {
        userGroupsSubscriptions();
        toast.success("Evento removido com sucesso!");
      })
      .catch((error) => toast.error("Erro ao remover este evento"));
  };

  return (
    <ActivitiesContext.Provider
      value={{ activities, addActivity, updateActivity, deleteActivity }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);
