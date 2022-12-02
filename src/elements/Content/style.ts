import styled from "styled-components";

const ContentSC = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.main};

`;

export const useContentStyle = () => ({
  ContentSC,
});
