import { ButtonContainer } from "./style";

export function Button({ title, icon: Icon }) {
  return (
    <ButtonContainer>
      <Icon />
      {title}
    </ButtonContainer>
  );
}
