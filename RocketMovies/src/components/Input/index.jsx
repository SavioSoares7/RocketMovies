import { InputContainer } from "./style";

export function Input({ title, icon: Icon, ...rest }) {
  return (
    <>
      <InputContainer>
        {Icon && <Icon size={20} />}
        <input {...rest} placeholder={title} />
      </InputContainer>
    </>
  );
}
