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
    top: -85px;
  }

  > svg {
    background-color: ${({ theme }) => theme.COLORS.FT_PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND};

    border-radius: 50%;
    padding: 8px;
    height: 48px;
    width: 48px;

    position: absolute;
    top: 180px;
    right: 580px;
  }
`;
