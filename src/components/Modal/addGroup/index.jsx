import { useState, useEffect } from "react";
import { Container } from "./style";
import { useUser } from "../../../providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../../services/api";
import { useGroups } from "../../../providers/groups"
import Button from '../../Button/index'
import { toast } from "react-toastify";


const AddGroupModal = ({ handleCloseAddGroupModal }) => {



    const { createGroup } = useGroups()

    const formSchema = yup.object().shape({
        name: yup.string().required("Informe o título"),
        description: yup.string().required("Informe a categoria"),
        category: yup.string().required("Informe a dificuldade?"),

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
        createGroup(data)
    }
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            toast.error("Preencha todos os campos corretamente...")

        }

    }, [errors])

    return (
        <Container>
            <div className="headder">
                <h2>Criar um grupo</h2>
                <button onClick={() => { handleCloseAddGroupModal() }}>X</button>
            </div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <input className="inputText" placeholder="Qual o nome do seu grupo?" {...register("name")}></input>
                <input className="inputText" placeholder="Qual a descrição do seu grupo?" {...register("description")}></input>
                <input className="inputText" placeholder="Qual a categoria do seu grupo?" {...register("category")}></input>

                <Button type="submit">Criar grupo</Button>
            </form>
        </Container >
    )

}

export default AddGroupModal