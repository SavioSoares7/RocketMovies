import styled from "styled-components";

export const Container = styled.header`
  height: 145px;
  padding: 42px 123px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.FT_GRAY200};

  > a {
    margin-right: 64px;
    font-weight: bold;
    font-size: 24px;
  }
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 64px;
  min-width: 200px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: 9px;
    font-size: 14px;

    span {
      font-weight: 700;
    }
    a {
      color: ${({ theme }) => theme.COLORS.FT_GRAY200};
    }
  }

  > img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`;
