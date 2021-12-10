import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";


export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5NDkzOTQ5LCJqdGkiOiIzM2IyZGU2MTk0YmY0MDJlOGQ5YTE3NzhiY2ZhYzk3MCIsInVzZXJfaWQiOjExMn0.3eS4VDWWeU4QWlaJiZnsA4_DhS9Ic4rZs6aRM8hzJms'

    const addActivity = (data) => {
    
    setActivities(data)
    api
    .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    .then(async (response) => {
      toast.success(`${data.title} agora é uma atividade`);
    })
    .catch((error) => toast.error("Erro ao criar uma atividade"));
};

    const updateActivity = (data) => {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5NDkzOTQ5LCJqdGkiOiIzM2IyZGU2MTk0YmY0MDJlOGQ5YTE3NzhiY2ZhYzk3MCIsInVzZXJfaWQiOjExMn0.3eS4VDWWeU4QWlaJiZnsA4_DhS9Ic4rZs6aRM8hzJms'

        console.log(data)
        api
        .patch("/activities/17/", data, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then(async (response) => {
        console.log(response)
        toast.success('deu certo');
        })
        .catch((error) => toast.error("Erro ao buscar este grupo"));
}
  
    const deleteActivity = () => {

        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5NDkzOTQ5LCJqdGkiOiIzM2IyZGU2MTk0YmY0MDJlOGQ5YTE3NzhiY2ZhYzk3MCIsInVzZXJfaWQiOjExMn0.3eS4VDWWeU4QWlaJiZnsA4_DhS9Ic4rZs6aRM8hzJms'

        api
        .delete("/activities/18/", {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then(async (response) => {
        console.log(response)
        toast.success('deu certo');
        })
        .catch((error) => toast.error("Erro ao deletar este grupo"));
    }

  return (
    <ActivitiesContext.Provider value={{ activities, addActivity, updateActivity, deleteActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);