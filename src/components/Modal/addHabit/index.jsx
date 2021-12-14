import { useState, useEffect } from "react";
import { Container } from "./style";
import { useUser } from "../../../providers/user";
import { useHabits } from "../../../providers/habits.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from '../../Button/index';
import { toast } from "react-toastify";
import { FiX } from "react-icons/fi";



const AddHabitModal = ({ handleCloseAddHabit }) => {

    const { userData } = useUser()
    const { createHabit } = useHabits()

    const formSchema = yup.object().shape({
        title: yup.string().required("Informe o título"),
        category: yup.string().required("Informe a categoria"),
        difficulty: yup.string().required("qual a dificuldade?"),
        frequency: yup.string().required("qual a frequência?"),

    })

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(formSchema),
        }
    )



    const onSubmitFunction = (infos) => {


        const data = {
            "title": infos.title,
            "category": infos.category,
            "difficulty": infos.difficulty,
            "frequency": infos.frequency,
            "achieved": false,
            "how_much_achieved": 0,
            "user": userData.user.id
        }
        createHabit(data);
        handleCloseAddHabit()
    }
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            toast.error("Preencha todos os campos corretamente...")

        }

    }, [errors])






    return (
        <Container>
            <div className="headder">
                <h2>Adicionar hábito</h2>
                <button onClick={() => { handleCloseAddHabit() }}><FiX></FiX></button>
            </div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>

                <input className="inputText" placeholder="Qual seu hábito?" {...register("title")}></input>

                <input className="inputText" placeholder="Qual a categoria do seu hábito?" {...register("category")}></input>


                <fieldset className="fildDificult"  >
                    <legend>Dificuldade</legend>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="dificultEasy" name="dificult" value="Fácil" {...register("difficulty")} />
                        <label htmlFor="dificultEasy">Fácil</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="dificultMedium" name="dificult" value="Moderada" {...register("difficulty")} />
                        <label htmlFor="dificultMedium">Moderada</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="dificultHard" name="dificult" value="Difícil" {...register("difficulty")} />
                        <label htmlFor="dificultHard">Difícil</label>
                    </div>
                </fieldset>
                <fieldset className="fildfrequency" >
                    <legend>Frequência</legend>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="frequencyWeekly" name="frequency" value="Diária" {...register("frequency")} />
                        <label htmlFor="frequencyDaily">Diária</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="frequencyWeekly" name="frequency" value="Semanal"  {...register("frequency")} />
                        <label htmlFor="frequencyWeekly">Semanal</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="frequencyMonthly" name="frequency" value="Mensal" {...register("frequency")} />
                        <label htmlFor="frequencyMonthly">Mensal</label>
                    </div>
                </fieldset>

                <Button type="submit">Cadastrar Hábito</Button>
            </form>
        </Container>
    )

}

export default AddHabitModal