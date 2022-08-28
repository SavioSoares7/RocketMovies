import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  padding-left: 134px;
  align-items: center;

  > div {
    > h1 {
      color: ${({ theme }) => theme.COLORS.FT_PINK};
      font-size: 48px;
    }
    > p {
      margin-bottom: 48px;
      color: ${({ theme }) => theme.COLORS.FT_GRAY300};
      font-weight: 400;
      font-size: 14px;
    }
    > form {
      > h2 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 48px;
      }
    }
  }
`;
