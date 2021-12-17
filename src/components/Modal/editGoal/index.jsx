import { Container } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../Button/index";
import { toast } from "react-toastify";
import { FiX } from "react-icons/fi";
import { useGroups } from "../../../providers/groups";
import { useEffect } from "react";

const EditGoalModal = ({ handleCloseEditGoal, habit }) => {
  const { editGroupGoal, deleteGroupGoal } = useGroups();

  const formSchema = yup.object().shape({
    title: yup.string().required("Informe o título"),

    difficulty: yup.string().required("qual a dificuldade?"),
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
      title: infos.title,
      difficulty: infos.difficulty,
      achieved: false,
    };
    editGroupGoal(data, habit.id);
    handleCloseEditGoal();
  };
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast.error("Preencha todos os campos corretamente...");
    }
  }, [errors]);

  return (
    <Container>
      <div className="headder">
        <h2>Alterar Meta</h2>
        <button
          onClick={() => {
            handleCloseEditGoal();
          }}
        >
          <FiX></FiX>
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          className="inputText"
          placeholder="Qual sua meta?"
          defaultValue={habit.title}
          {...register("title")}
        ></input>

        <fieldset className="fildDificult">
          <legend>Dificuldade</legend>
          <div className="divRadio">
            <input
              className="radio"
              type="radio"
              id="dificultEasy"
              name="dificult"
              value="Fácil"
              {...register("difficulty")}
              defaultChecked={
                habit.difficulty === "Fácil" ? "defaultChecked" : false
              }
            />
            <label htmlFor="dificultEasy">Fácil</label>
          </div>
          <div className="divRadio">
            <input
              className="radio"
              type="radio"
              id="dificultMedium"
              name="dificult"
              value="Moderada"
              {...register("difficulty")}
              defaultChecked={
                habit.difficulty === "Moderada" ? "defaultChecked" : false
              }
            />
            <label htmlFor="dificultMedium">Moderada</label>
          </div>
          <div className="divRadio">
            <input
              className="radio"
              type="radio"
              id="dificultHard"
              name="dificult"
              value="Difícil"
              {...register("difficulty")}
              defaultChecked={
                habit.difficulty === "Difícil" ? "defaultChecked" : false
              }
            />
            <label htmlFor="dificultHard">Difícil</label>
          </div>
        </fieldset>

        <Button type="submit">Alterar Meta</Button>
        <Button
          onClick={() => {
            deleteGroupGoal(habit.id);
            handleCloseEditGoal();
          }}
        >
          Deletar Meta
        </Button>
      </form>
    </Container>
  );
};

export default EditGoalModal;
