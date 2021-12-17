import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useUser } from "./user";

export const UserGroupsContext = createContext();

export const UserGroupsProvider = ({ children }) => {
  const [userGroups, setUserGroups] = useState(() => {
    const localUserGroups = localStorage.getItem("@habits:userGroups");

    if (localUserGroups) {
      return JSON.parse(localUserGroups);
    }
    return [];
  });

  const { userData } = useUser();

  const userGroupsSubscriptions = () => {
    api
      .get(`/groups/subscriptions/`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((response) => {
        setUserGroups(response.data);
        localStorage.setItem(
          "@habits:userGroups",
          JSON.stringify(response.data)
        );
      });
  };

  const subscribeToGroup = (groupId) => {
    api
      .post(`/groups/${groupId}/subscribe/`, "", {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((_) => {
        userGroupsSubscriptions();
        toast.success("Agora você faz parte desse grupo");
      })
      .catch((error) => toast.error("Você já está nesse grupo"));
  };

  const unsubscribeFromGroup = (groupId) => {
    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((_) => {
        userGroupsSubscriptions();
        toast.success("Você saiu do grupo");
      })
      .catch((_) => toast.error("Você não está nesse grupo"));
  };

  //update and get user groups subscriptions
  useEffect(() => {
    userGroupsSubscriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.token]);

  return (
    <UserGroupsContext.Provider
      value={{
        userGroups,
        subscribeToGroup,
        unsubscribeFromGroup,
        userGroupsSubscriptions,
      }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};

export const useUserGroups = () => useContext(UserGroupsContext);
