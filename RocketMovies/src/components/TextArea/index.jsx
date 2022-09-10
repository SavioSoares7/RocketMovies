import { Container } from "./style";

export function TextArea({ title, ...rest }) {
  return <Container placeholder={title} />;
}
