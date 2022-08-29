import { Container, Background } from "./styled";

import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SingUp() {
  return (
    <Container>
      <div>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <form>
          <h2>Faça seu login</h2>
          <Input placeholder="E-mail" icon={FiMail} type="email" />
          <Input placeholder="Senha" icon={FiLock} type="password" />

          <Button title="Entrar" />
        </form>
        <a href="#">Criar conta</a>
      </div>
      <Background />
    </Container>
  );
}
