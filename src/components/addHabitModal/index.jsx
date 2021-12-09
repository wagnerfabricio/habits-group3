import { useState, useEffect } from "react";
import { Container } from "./style";
import { useUser } from "../../providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api";


const AddHabitModal = () => {

    const [data, setData] = useState({})
    const { userData } = useUser()

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
        setData({
            "title": infos.title,
            "category": infos.category,
            "difficulty": infos.difficulty,
            "frequency": infos.frequency,
            "achieved": false,
            "how_much_achieved": 0,
            "user": 74 //userData.id
        })
        api
            .post(`/habits/`, data, {
                headers: {
                    Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5NDI4NDQzLCJqdGkiOiI4MjJkMDYzYTMwYWQ0NmQ4OTdlZTlmMWNhNmU0OGJkMSIsInVzZXJfaWQiOjc0fQ.pAnCP5eN5J7dM3BsSCHwk_E1D45fqKeYD66CF2l5t0c"}`,
                    //userData.token
                },
            })
            .then((response) => {
                console.log(response)

            })
            .catch((error) => console.log(error));
    }
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <input placeholder="Qual seu hábito?" {...register("title")}></input>
                <input placeholder="Qual a categoria do seu hábito?" {...register("category")}></input>
                <input placeholder="Qual a dificuldade?" {...register("difficulty")}></input>
                <input placeholder="Qual a frequência?" {...register("frequency")}></input>
                <button type="submit">Cadastrar Hábito</button>
            </form>
        </Container>
    )

}

export default AddHabitModal