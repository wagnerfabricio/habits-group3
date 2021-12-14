import Input from "../../components/Input/index";
import { FiLock, FiMail } from "react-icons/fi";
import { AnimationContainer, Background, Container, Content } from "./styles";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../providers/user";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 8 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const { login } = useUser();

  const onSubmit = (data) => {
    console.log("oi");
    login(data);
    history.push('/dashboard');
  };

  return (
    <Container>
      <Content>
        <AnimationContainer className='form-father'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Input
              label="Username"
              icon={FiMail}
              placeholder="Username"
              register={register}
              name="username"
              error={errors.username?.message}
            />
            <Input
              label="Senha"
              icon={FiLock}
              placeholder="Senha"
              register={register}
              name="password"
              error={errors.password?.message}
              type="password"
            />
            <button type="submit">Enviar</button>
            <p>
              Caso ainda não tenha um cadastro <Link to="/signup">clique aqui</Link> para fazer o seu cadastro.
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
