import { useState, useEffect } from "react";
import { Container } from "./style";
import { useUser } from "../../../providers/user";
import { useHabits } from "../../../providers/habits.js"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import Button from '../../Button/index'



const AddHabitModal = ({ handleCloseAddHabit }) => {

    const { userData } = useUser()
    const { createHabit } = useHabits()


    const formSchema = yup.object().shape({
        title: yup.string().required("Informe o título"),
        category: yup.string().required("Informe a categoria"),
        difficulty: yup.string().required("qual a dificuldade?"),
        frequency: yup.string().required("qual a dificuldade?"),

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
            "user": userData.id
        }
        createHabit(data);

    }
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <div className="headder">
                    <h2>Adicionar hábito</h2>
                    <button onClick={() => { handleCloseAddHabit() }}>X</button>
                </div>

                <input className="inputText" placeholder="Qual seu hábito?" {...register("title")}></input>
                <input className="inputText" placeholder="Qual a categoria do seu hábito?" {...register("category")}></input>


                <fieldset className="fildDificult"  >
                    <legend>Dificuldade</legend>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="dificultEasy" name="dificult" value="Fácil" {...register("difficulty")} />
                        <label for="dificultEasy">Fácil</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="dificultMedium" name="dificult" value="Moderado" {...register("difficulty")} />
                        <label for="dificultMedium">Moderado</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="dificultHard" name="dificult" value="Difícil" {...register("difficulty")} />
                        <label for="dificultHard">Difícil</label>
                    </div>
                </fieldset>
                <fieldset className="fildfrequency" >
                    <legend>Frequência</legend>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="frequencyWeekly" name="frequency" value="Diário" {...register("frequency")} />
                        <label for="frequencyDaily">Diário</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="frequencyWeekly" name="frequency" value="Semanal"  {...register("frequency")} />
                        <label for="frequencyWeekly">Semanal</label>
                    </div>
                    <div className="divRadio">
                        <input className="radio" type="radio" id="frequencyMonthly" name="frequency" value="Mensal" {...register("frequency")} />
                        <label for="frequencyMonthly">Mensal</label>
                    </div>
                </fieldset>

                <Button type="submit">Cadastrar Hábito</Button>



            </form>
        </Container >
    )

}

export default AddHabitModal