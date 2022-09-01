import { HeaderContainer, ProfileContainer } from "./style";
import { AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";

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
    </>
  );
}
