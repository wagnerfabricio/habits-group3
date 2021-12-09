import { useState, useEffect } from "react";
import { Container } from "./style";
import { useUser } from "../../../providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../../services/api";


const AddGroupModal = () => {


    const { userData } = useUser()

    const formSchema = yup.object().shape({
        name: yup.string().required("Informe o título"),
        description: yup.string().required("Informe a categoria"),
        category: yup.string().required("qual a dificuldade?"),

    })

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(formSchema),
        }
    )

    const onSubmitFunction = (infos) => {

        const data = {
            "name": infos.name,
            "description": infos.description,
            "category": infos.category,

        }

        api
            .post(`/groups/`, data, {
                headers: {
                    Authorization: `Bearer ${userData.token}`,
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
                <input placeholder="Qual o nome do seu grupo?" {...register("name")}></input>
                <input placeholder="Qual a descrição do seu grupo?" {...register("description")}></input>
                <input placeholder="Qual a categoria do seu grupo?" {...register("category")}></input>

                <button type="submit">Criar grupo</button>
            </form>
        </Container>
    )

}

export default AddGroupModal