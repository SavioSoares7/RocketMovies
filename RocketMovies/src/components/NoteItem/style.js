import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;
  color: ${({ theme }) => theme.COLORS.FT_WHITE};
  background-color: ${({ theme }) => theme.COLORS.FT_BLACK300};

  border-radius: 10px;
  min-height: 56px;
  margin-right: 24px;

  .container-delete {
    border: 1px dashed ${({ theme }) => theme.COLORS.FT_WHITE};
    padding: 16px;
  }
  .container-add {
    cursor: not-allowed;
  }

  > input {
    background: none;
    border: none;
    outline: none;

    color: ${({ theme }) => theme.COLORS.FT_WHITE};
  }
  > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.FT_WHITE};
    > svg {
      color: ${({ theme }) => theme.COLORS.FT_PINK};
    }
  }
`;
