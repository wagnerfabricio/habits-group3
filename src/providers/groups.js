import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useUser } from "./user";
import { useUserGroups } from "./userGroups";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState({});
  const [groupPage, setGroupPage] = useState(1);

  const { userData } = useUser();
  const {userGroupsSubscriptions} = useUserGroups();

  const changeGroupPage = (value) => {
    //value could be 1 or -1 to change to the next or previus page
    if (value > 0 && groups.next !== null) {
      setGroupPage(groupPage + value);
    }
    if (value < 0 && groups.previous !== null) {
      setGroupPage(groupPage + value);
    }
  };

  const searchGroup = (string) => {
    api.get(`/groups/?search=${string}`).then((response) => {
      setGroups(response.data);
    });
  };

  const searchGroupByCategory = (string) => {
    api.get(`/groups/?category=${string}`).then((response) => {
      setGroups(response.data);
    });
  };

  const createGroup = (data) => {
    api
      .post(`/groups/`, data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(toast.success("Grupo criado com sucesso"))
      .catch((_) => toast.error("Grupo já existente"));
  };

  const editGroup = (data, groupId) => {
    api
      .patch(`/groups/${groupId}/`, data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((_) => toast.success("Grupo alterado com sucesso"))
      .catch((_) => toast.error("Você não pode alterar este grupo"));
  };

  const newGroupGoal = (data) => {
    api
      .post(`/goals/`, data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((response) => {
        userGroupsSubscriptions()
        console.log(response);
        toast.success("Meta criada com sucesso");
      })
      .catch((_) => toast.error("Erro inesperado, tente mais tarde"));
  };

  const editGroupGoal = (data, goalId) => {
    api
      .patch(`/goals/${goalId}/`, data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((response) => {
        userGroupsSubscriptions()
        console.log(response);
        toast.success("Meta alterada com sucesso");
      })
      .catch((_) => toast.error("Essa meta não existe"));
  };

  const deleteGroupGoal = (goalId) => {
    api.delete(`/goals/${goalId}/`, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    }).then((_) => {
      userGroupsSubscriptions()
      toast.success("Meta excluída");
    })
    .catch((_) => toast.error("Essa meta não existe"));
  }

  useEffect(() => {
    api
      .get(`/groups/?page=${groupPage}`)
      .then((response) => setGroups(response.data));
  }, [groupPage]);

  return (
    <GroupsContext.Provider
      value={{
        groups,
        changeGroupPage,
        searchGroup,
        searchGroupByCategory,
        createGroup,
        editGroup,
        newGroupGoal,
        editGroupGoal,
        deleteGroupGoal,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
