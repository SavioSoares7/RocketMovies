import styled from "styled-components";

export const Container = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1080px;
    margin: 0 auto;

    > button {
      max-width: 200px;
    }
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
