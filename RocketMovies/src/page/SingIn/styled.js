import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  padding-left: 134px;
  align-items: center;

  > div {
    padding-right: 164px;
    text-align: center;
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
      > Button {
        margin-bottom: 42px;
        margin-top: 24px;
      }
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.2);
  height: 100%;
  width: 25%;
`;
