import Input from "../../components/Input/index";
import { FiLock, FiUser } from "react-icons/fi";
import { AnimationContainer, Background, Container, Content } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../providers/user";
import SignUpImage from "../../assets/images/loginImg.svg";
import Button from "../../components/Button";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { login } = useUser();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Input
              icon={FiUser}
              placeholder="Username"
              register={register}
              name="username"
              error={errors.username?.message}
            />
            <Input
              icon={FiLock}
              placeholder="Senha"
              register={register}
              name="password"
              error={errors.password?.message}
              type="password"
            />
            <Button type="submit">Enviar</Button>
            <p>
              Caso ainda não tenha um cadastro <Link to="/signup"><span>clique aqui</span></Link> para fazer o seu cadastro.
            </p>
          </form>
          <div>
            <img src={SignUpImage} alt="" />
          </div>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
