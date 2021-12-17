import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem("@habits:token");
    const user = localStorage.getItem("@habits:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const history = useHistory();

  const login = (data) => {
    api
      .post("/sessions/", data)
      .then(async (response) => {
        const token = response.data.access;
        localStorage.setItem("@habits:token", token);

        const userId = jwt_decode(token).user_id;

        const userResponse = await api.get(`/users/${userId}/`);
        localStorage.setItem("@habits:user", JSON.stringify(userResponse.data));

        setUserData({ token, user: userResponse.data });
        toast.success("Login efetuado com sucesso");
        history.push("/dashboard");
      })
      .catch((error) => toast.error("Nome de usuário ou senha inválidos"));
  };

  const logout = () => {
    localStorage.clear();

    setUserData({});
    toast.success("Você saiu :`(");
  };

  const updateUser = (data) => {
    if (userData) {
      const { token } = userData;
      const { id } = userData.user;

      api
        .patch(`/users/${id}/`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData({ ...userData, user: response.data });
          localStorage.setItem("@habits:user", JSON.stringify(response.data));
          toast.success("Nome de usuário ou email alterado com sucesso");
        })
        .catch((error) => toast.error("Nome de usuário já está em uso"));
    }
  };

  return (
    <UserContext.Provider value={{ userData, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
