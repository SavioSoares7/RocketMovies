import { Container } from "./style";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

export function NoteItem({ title, isNew, ...rest }) {
  return (
    <Container>
      <input
        value={title}
        className={isNew ? "container-delete" : "container-add"}
        type="text"
        readOnly={!isNew}
        {...rest}
      />
      <button>{isNew ? <AiOutlinePlus /> : <AiOutlineClose />}</button>
    </Container>
  );
}
