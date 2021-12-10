import { Container } from "./style";


export const EditUser = () => {

    const { createGroup } = useGroups()

    const formSchema = yup.object().shape({
        username: yup.string().required("Informe o novo usuário"),
        email: yup.string().required("Informe o email").email("Email inválido"),


    })

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(formSchema),
        }
    )

    const onSubmitFunction = (infos) => {

        const data = {
            "username": infos.username,
            "email": infos.email


        }
        createGroup(data)
    }

    return (
        <Container>

            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <input placeholder="Qual o nome do seu grupo?" {...register("username")}></input>
                <input placeholder="Qual a descrição do seu grupo?" {...register("email")}></input>


                <button type="submit">Criar grupo</button>
            </form>



        </Container>
    )
}