import { useForm } from "react-hook-form";
import { useUser } from "../../../providers/user";
import { Container } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Button from "../../Button/index";
import { GiExitDoor } from "react-icons/gi";
import { ButtonExit } from "./style";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EditUser = ({ handleCloseEditUserModal }) => {
  const { updateUser, userData } = useUser();
  
  const formSchema = yup.object().shape({
    username: yup.string().required("Informe o novo usuário"),
    email: yup.string().required("Informe o email").email("Email inválido"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  const onSubmitFunction = (infos) => {
    const data = {
      username: infos.username,
      email: infos.email,
    };
    updateUser(data);
    handleCloseEditUserModal()
  };
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast.error("Preencha todos os campos corretamente...");
    }
  }, [errors]);

  return (
    <Container>
      <div className="headder">
        <h2>Editar Usuário</h2>
        <button
          onClick={() => {
            handleCloseEditUserModal();
          }}
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          className="inputText"
          placeholder="Nome"
          {...register("username")}
          defaultValue={userData.user.username}
        ></input>
        <input
          className="inputText"
          placeholder="E-mail"
          {...register("email")}
          defaultValue={userData.user.email}
        ></input>

        <Button type="submit">Salvar alteração!</Button>
      </form>
      <ButtonExit onClick={onLogout}>
        <GiExitDoor size={35} color={"grey"}/>
        <span>Sair</span>
      </ButtonExit>
    </Container>
  );
};
