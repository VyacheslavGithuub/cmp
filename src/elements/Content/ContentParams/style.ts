import styled from "styled-components";

const ContentParamsSC = styled.div`
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.textAuxiliary};
  font-size: 14px;
  padding-left: 20px;
  display: grid;
  grid-template-columns: 10% 42% 12% 12% 12% 12%;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  align-items: center;
`;
export const useContentParamsStyle = () => ({
  ContentParamsSC,
});
