import styled from "styled-components";

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding-bottom: 20px;
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 40px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  > div#user {
    > img {
      height: 16px;
      width: 16px;
      border-radius: 50%;
    }
  }
  > div#time {
    > svg {
      color: ${({ theme }) => theme.COLORS.FT_PINK};
    }
  }
`;

export const ContainerText = styled.div`
  margin-top: 40px;

  > p {
    margin-bottom: 20px;
    text-align: justify;
  }
`;
