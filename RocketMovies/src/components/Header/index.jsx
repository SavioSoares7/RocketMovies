import { Container, Profile } from "./style";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <a href="#">RocketMovies</a>

      <Input title="Pesquisar pelo titulo" />

      <Profile>
        <div>
          <span>Sávio Soares</span>
          <a href="#">Sair</a>
        </div>
        <img src="https://github.com/saviosoares7.png" alt="Sávio Soares" />
      </Profile>
    </Container>
  );
}
