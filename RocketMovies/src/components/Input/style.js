import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;

  width: 100%;
  height: 56px;
  color: ${({ theme }) => theme.COLORS.FT_GRAY200};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND200};
  border-radius: 20px;
  margin-bottom: 8px;

  > input {
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.FT_WHITE};
    outline: none;
  }
`;
