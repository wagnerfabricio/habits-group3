import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import jwt_decode from "jwt-decode";
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
        toast.success(`${data.title} agora é uma atividade`);
      })
      .catch((error) => toast.error("Erro ao criar uma atividade"));
  };

  const updateActivity = (id, data) => {
    console.log(id);
    api
      .patch(`/activities/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(async (response) => {
        console.log(response);
        userGroupsSubscriptions();
        toast.success("Atividade atualizada com sucesso");
      })
      .catch((error) =>
        toast.error(
          "Erro ao atualizar esta atividade. Lembre-se que você precisa estar no grupo passado."
        )
      );
  };

  const deleteActivity = (id) => {
    console.log(id);
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(async (response) => {
        userGroupsSubscriptions();
        toast.success("Atividade removida com sucesso!");
      })
      .catch((error) => toast.error("Erro ao remover esta atividade"));
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
