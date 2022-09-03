import { Container, BoxContainer, ContainerMain } from "./style";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { AiOutlinePlus } from "react-icons/ai";

export function Home() {
  return (
    <Container>
      <Header />
      <div>
        <Section title="Meus filmes" />
        <Button title="Adicionar filme" icon={AiOutlinePlus} />
      </div>
      <ContainerMain>
        <BoxContainer>teste</BoxContainer>
      </ContainerMain>
    </Container>
  );
}
