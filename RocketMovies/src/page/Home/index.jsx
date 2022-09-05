import { Container, ContainerMain } from "./style";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Notes } from "../../components/Notes";

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
        <Notes
          data={{
            title: "Interestellar",
            star: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea quidem ratione vel quisquam aperiam veritatis nam mollitia quo voluptatibus in, pariatur adipisci aut dignissimos, numquam nihil quaerat placeat excepturi?",
            tags: [
              { id: 1, title: "Node" },
              { id: 2, title: "Node" },
              { id: 3, title: "Node" },
            ],
          }}
        />
      </ContainerMain>
    </Container>
  );
}
