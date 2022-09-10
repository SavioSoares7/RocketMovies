import styled from "styled-components";

export const Container = styled.main`
  width: 1080px;
  margin: 0 auto;

  > form {
    > div {
      display: flex;
      gap: 40px;

      margin-bottom: 40px;
    }
  }
`;
export const Footer = styled.footer`
  margin-top: 40px;
  color: ${({ theme }) => theme.COLORS.FT_GRAY};

  > div {
    display: flex;

    margin-top: 24px;

    min-height: 88px;
    background-color: ${({ theme }) => theme.COLORS.FT_BLACK};
    border-radius: 8px;
    padding: 16px;
  }
`;
