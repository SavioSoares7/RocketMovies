import styled from "styled-components";

export const Container = styled.div`
  min-height: 200px;
  background-color: ${({ theme }) => theme.COLORS.FT_PINK200};

  width: 1080px;
  margin: 0 auto;
  padding: 32px;

  border-radius: 16px;

  > h6 {
    font-size: 24px;
    font-weight: 700;

    margin-bottom: 8px;

    color: ${({ theme }) => theme.COLORS.FT_WHITE};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
  }
  > footer {
    svg {
      color: ${({ theme }) => theme.COLORS.FT_WHITE};
      margin-bottom: 15px;

      div {
        display: flex;
        align-items: center;
      }
    }
  }
`;
