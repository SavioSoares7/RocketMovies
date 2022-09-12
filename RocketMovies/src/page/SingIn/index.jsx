import { Link } from "react-router-dom";

import { Container, Background } from "./styled";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SingIn() {
  return (
    <Container>
      <div>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <form>
          <h2>Crie sua conta</h2>
          <Input placeholder="Nome" icon={FiUser} type="text" />
          <Input placeholder="E-mail" icon={FiMail} type="email" />
          <Input placeholder="Senha" icon={FiLock} type="password" />

          <Button title="Cadastrar" />
        </form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </div>
      <Background />
    </Container>
  );
}
