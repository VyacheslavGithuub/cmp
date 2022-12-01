import styled from "styled-components";

const MainLayoutSC = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.textMain};
`;
const MainContentSC = styled.main`
  display: flex;
  width: 100%;
`;
export const useMainLayoutStyle = () => ({
  MainLayoutSC,
  MainContentSC,
});
