import { useState, useEffect } from "react";
import { Container } from "./style";
import { useUser } from "../../../providers/user";
import { useHabits } from "../../../providers/habits.js"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import Button from '../../Button/index'
import { toast } from "react-toastify";
import { FiX } from "react-icons/fi";




const EditHabitModal = ({ handleCloseEditHabit, habit }) => {

    const { userData } = useUser()
    const { editHabit, deleteHabit } = useHabits()

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
            "achieved": habit.achieved,
            "how_much_achieved": habit.how_much_achieved,
            "user": userData.user.id
        }
        editHabit(data, habit.id);
        handleCloseEditHabit()
    }
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            toast.error("Preencha todos os campos corretamente...")

        }

    }, [errors])


    const test = habit.difficulty



    return (
        <Container>
            <div className="headder">
                <h2>Editar hábito</h2>
                <button onClick={handleCloseEditHabit}><FiX></FiX></button>
            </div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>

                <input className="inputText" defaultValue={habit.title} {...register("title")}></input>

                <input className="inputText" defaultValue={habit.category} {...register("category")}></input>


                <fieldset className="fildDificult"  >
                    <legend>Dificuldade</legend>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="dificultEasy" name="dificult" value="Fácil"  {...register("difficulty")} defaultChecked={habit.difficulty === "Fácil" ? "defaultChecked" : false} />
                        <label htmlFor="dificultEasy">Fácil</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="dificultMedium" name="dificult" value="Moderada" {...register("difficulty")} defaultChecked={habit.difficulty === "Moderada" ? "defaultChecked" : false} />
                        <label htmlFor="dificultMedium">Moderada</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="dificultHard" name="dificult" value="Difícil" {...register("difficulty")} defaultChecked={habit.difficulty === "Difícil" ? "defaultChecked" : false} />
                        <label htmlFor="dificultHard">Difícil</label>
                    </div>
                </fieldset>
                <fieldset className="fildfrequency" >
                    <legend>Frequência</legend>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="frequencyWeekly" name="frequency" value="Diária" {...register("frequency")} defaultChecked={habit.frequency === "Diária" ? "defaultChecked" : false} />
                        <label htmlFor="frequencyDaily">Diária</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="frequencyWeekly" name="frequency" value="Semanal"  {...register("frequency")} defaultChecked={habit.frequency === "Semanal" ? "defaultChecked" : false} />
                        <label htmlFor="frequencyWeekly">Semanal</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="frequencyMonthly" name="frequency" value="Mensal" {...register("frequency")} defaultChecked={habit.frequency === "Mensal" ? "defaultChecked" : false} />
                        <label htmlFor="frequencyMonthly">Mensal</label>
                    </div>
                </fieldset>

                <Button type="submit">Editar hábito</Button>

            </form>
            <Button onClick={() => { deleteHabit(habit.id) }} >Deletar hábito</Button>
        </Container>
    )

}

export default EditHabitModal