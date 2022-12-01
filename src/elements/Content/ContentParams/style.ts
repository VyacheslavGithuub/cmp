import styled from "styled-components";

const ContentParamsSC = styled.div`
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.textAuxiliary};
  font-size: 14px;

  display: grid;
  grid-template-columns: 110px 757px 200px 200px 200px 200px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  align-items: center;
`;
export const useContentParamsStyle = () => ({
  ContentParamsSC,
});
