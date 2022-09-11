import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.FT_BLACK};
  color: ${({ theme }) => theme.COLORS.FT_PINK};
`;
