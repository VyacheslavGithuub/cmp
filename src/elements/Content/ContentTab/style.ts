import styled from "styled-components";

const ContentTabSC = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.auxiliary};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
const ContentTabTitleSC = styled.h2`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 17px;
  padding: 0px 15px;
  border-right: 1px solid ${({ theme }) => theme.border};
  line-height: 150%;
`;

export const useContentTabStyle = () => ({
  ContentTabSC,
  ContentTabTitleSC,
});
