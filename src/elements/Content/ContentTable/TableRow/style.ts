import styled from "styled-components";

export const TableRowSC = styled.div`
  display: flex;
  padding-left: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  align-items: center;
  min-height: 60px;
`;

const TableRowWrapSC = styled.div<{ isOpen: boolean }>`
  min-height: 60px;
  max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  overflow: hidden;
  padding: ${({ isOpen }) => (isOpen ? "0" : "0")};
`;

export const useTableRowStyle = () => ({
  TableRowSC,
  TableRowWrapSC,
});
