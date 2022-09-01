import { HeaderContainer, ProfileContainer, Container } from "./style";
import { AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";
import { BiUser, BiLockAlt } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <>
      <HeaderContainer>
        <a href="#">
          <AiOutlineArrowLeft /> Voltar
        </a>
      </HeaderContainer>

      <ProfileContainer>
        <img src="https://github.com/saviosoares7.png" alt="" />
        <AiOutlineCamera />
      </ProfileContainer>

      <Container>
        <Input title="Usuário" icon={BiUser} />
        <Input title="Email" icon={FiMail} type="email" />
        <Input title="Senha" icon={BiLockAlt} type="password" />
        <Input title="Repita a senha" icon={BiLockAlt} type="password" />

        <Button title="Salvar" />
      </Container>
    </>
  );
}
