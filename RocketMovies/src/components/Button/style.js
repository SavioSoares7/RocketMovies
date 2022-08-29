import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.FT_PINK};
  background-color: ${({ theme }) => theme.COLORS.BLACK_300};
  cursor: pointer;
`;
