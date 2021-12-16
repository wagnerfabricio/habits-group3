import React from "react";
import { Container, Content, AnimationContainer, Background } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, useHistory } from "react-router-dom";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

function SignUp() {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Senha obrigatória"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha estão diferentes")
      .required("Senha obrigatória"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFuncion = ({ username, email, password }) => {
    const user = { username, email, password };

    api
      .post("/users/", user)
      .then((response) => {
        toast.success("Sucesso ao criar a conta.");
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Usuário ou email já cadastrado");
      });
  };

  return (
   
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFuncion)}>
            <h1>Cadastre-se</h1>
            <Input
              icon={FiUser}
              register={register}
              placeholder={"Nome"}
              name="username"
              error={errors.username?.message}
            ></Input>
            <Input
              icon={FiMail}
              register={register}
              placeholder={"Email"}
              name="email"
              error={errors.email?.message}
            ></Input>
            <Input
              icon={FiLock}
              name="password"
              register={register}
              placeholder={"Senha"}
              type="password"
              error={errors.password?.message}
            ></Input>
            <Input
              icon={FiLock}
              name="passwordConfirm"
              register={register}
              placeholder={"Confirmar Senha"}
              type="password"
              error={errors.passwordConfirm?.message}
            ></Input>
            <Button type="submit">Cadastrar</Button>
            <p>
              Já possui um cadastro?{" "}
              <Link to="/login" className="link">
                <span>Clique aqui</span>
              </Link>{" "}
              para fazer o seu login!
            </p>
          </form>
        </AnimationContainer>
      </Content>
      </Container>
    
    
  );
}

export default SignUp;
