import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: rgba(255, 133, 155, 0.05);
  height: 120px;
  padding: 64px 144px;
`;
export const ProfileContainer = styled.div`
  text-align: center;

  display: flex;
  justify-content: center;
  width: 100%;
  height: 20px;

  > img {
    border-radius: 50%;
    height: 185px;
    width: 185px;

    position: relative;
    z-index: -1;
    top: -85px;
  }

  > svg {
    background-color: ${({ theme }) => theme.COLORS.FT_PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND};

    border-radius: 50%;
    padding: 8px;
    height: 48px;
    width: 48px;

    margin-top: 53px;
    margin-left: -50px;
  }
`;
export const Container = styled.div`
  width: 100%;
  margin: 260px auto;

  height: 20px;
  max-width: 340px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  div:nth-child(2) {
    margin-bottom: 24px;
  }

  > button {
    margin-top: 24px;
    padding: 20px;
  }
`;
