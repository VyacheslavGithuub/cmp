import styled from "styled-components";

const TableRowSC = styled.div`
  width: 100%;
  min-height: 60px;
  color: ${({ theme }) => theme.textAuxiliary};
  font-size: 14px;
  padding-left: 20px;
  display: grid;
  grid-template-columns: 10% 42% 12% 12% 12% 12%;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  align-items: center;
`;
const TableLvlSC = styled.div<{ number: number; leftPadding: number }>`
  padding-left: ${({ leftPadding }) => leftPadding + "px"};
  display: flex;
`;
const TableRowWrapSC = styled.div<{ isOpen: boolean }>`
  min-height: 60px;
  max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  overflow: hidden;
  padding: ${({ isOpen }) => (isOpen ? "0" : "0")};
  transition: all 0.3s ease-out;
`;
const TableLvlShowSC = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  margin-right: 5px;
  transition: rotate(${({ isOpen }) => (isOpen ? "0deg" : "180deg")});
`;

export const useTableRowStyle = () => ({
  TableRowSC,
  TableLvlSC,
  TableRowWrapSC,
  TableLvlShowSC,
});
