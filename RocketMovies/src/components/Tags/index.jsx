import { Container } from "./style";

export function Tags({ title, key, ...rest }) {
  return <Container key={key}>{title}</Container>;
}
