import { Container, Footer } from "./style";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";

import { AiOutlineArrowLeft } from "react-icons/ai";

export function CreateMovie() {
  return (
    <>
      <Header />
      <Container>
        <Section
          title="Novo filme"
          icon={AiOutlineArrowLeft}
          titleLink="Voltar"
        />

        <form action="#">
          <div>
            <Input title="Titulo" />
            <Input title="Sua nota de (0 a 5)" />
          </div>

          <TextArea title="Observações" />
        </form>

        <Footer>
          <span>Marcadores</span>

          <div>
            <NoteItem title="React" />

            <NoteItem isNew />
          </div>
        </Footer>
      </Container>
    </>
  );
}
