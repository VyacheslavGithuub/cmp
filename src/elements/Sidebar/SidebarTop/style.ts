import styled from "styled-components";

const SidebarTopSC = styled.div`
  height: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textAuxiliary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 20px;

  h3 {
    font-size: 14px;
  }
  h4 {
    font-size: 12px;
  }
  img {
    width: 15px;
    cursor: pointer;
  }
`;

export const useSidebarTopStyle = () => ({
  SidebarTopSC,
});
