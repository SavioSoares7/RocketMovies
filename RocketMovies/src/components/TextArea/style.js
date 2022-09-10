import styled from "styled-components";

export const Container = styled.textarea`
  min-height: 275px;
  border-radius: 20px;
  width: 100%;

  border: none;
  resize: none;
  outline: none;

  padding: 19px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND200};
  color: ${({ theme }) => theme.COLORS.FT_WHITE};

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.FT_GRAY200};
  }
`;
