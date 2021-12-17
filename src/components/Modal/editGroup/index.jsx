import { useEffect } from "react";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGroups } from "../../../providers/groups";
import Button from "../../Button/index";
import { toast } from "react-toastify";
import { useUserGroups } from "../../../providers/userGroups";

const EditGroupModal = ({ handleClose, group }) => {
  const { editGroup } = useGroups();
  const { unsubscribeFromGroup } = useUserGroups();

  const formSchema = yup.object().shape({
    name: yup.string().required("Informe o título"),
    description: yup.string().required("Informe a categoria"),
    category: yup.string().required("Informe a dificuldade?"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (infos) => {
    const data = {
      name: infos.name,
      description: infos.description,
      category: infos.category,
    };
    editGroup(data, group.id);
    handleClose();
  };
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast.error("Preencha todos os campos corretamente...");
    }
  }, [errors]);

  return (
    <Container>
      <div className="headder">
        <h2>Editar grupo</h2>
        <button
          onClick={() => {
            handleClose();
          }}
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          className="inputText"
          placeholder="Qual o nome do seu grupo?"
          defaultValue={group.name}
          {...register("name")}
        ></input>
        <input
          className="inputText"
          placeholder="Qual a descrição do seu grupo?"
          defaultValue={group.description}
          {...register("description")}
        ></input>
        <input
          className="inputText"
          placeholder="Qual a categoria do seu grupo?"
          defaultValue={group.category}
          {...register("category")}
        ></input>

        <Button type="submit">Editar grupo</Button>
      </form>
      <Button
        onClick={() => {
          unsubscribeFromGroup(group.id);
          handleClose();
        }}
      >
        Apagar grupo
      </Button>
    </Container>
  );
};

export default EditGroupModal;
