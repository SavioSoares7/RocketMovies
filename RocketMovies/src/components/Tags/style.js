import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  margin-top: 15px;
  margin-right: 8px;
  text-align: center;

  height: 24px;
  background-color: ${({ theme }) => theme.COLORS.FT_BLACK300};

  padding: 5px 16px 5px 16px;
  border-radius: 8px;
`;
