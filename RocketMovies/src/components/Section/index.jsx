import { Container } from "./style";

export function Section({ title, titleLink, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && (
        <a href="#">
          <Icon size="20" />
          {titleLink}
        </a>
      )}

      <span>{title}</span>
    </Container>
  );
}
