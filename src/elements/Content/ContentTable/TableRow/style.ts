import styled from "styled-components";

export const TableRowSC = styled.div`
  display: flex;
  padding-left: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  align-items: center;
  min-height: 60px;
`;
const TableLvlSC = styled.div<{ leftPadding: number }>`
  padding-left: ${({ leftPadding }) => leftPadding + "px"};
  display: flex;
  width: 120px;

  img {
    width: 18px;
    height: 17px;
  }
`;
const TableRowWrapSC = styled.div<{ isOpen: boolean }>`
  min-height: 60px;
  max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  overflow: hidden;
  padding: ${({ isOpen }) => (isOpen ? "0" : "0")};
`;
const TableLvlShowSC = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  margin-right: 5px;
  transition: rotate(${({ isOpen }) => (isOpen ? "0deg" : "180deg")});
  margin-top: 5px;
`;
const FileDescriptionSC = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  line-height: 100%;
  width: 40px;
`;
const TableLvlContentSC = styled.div<{ isVisible: boolean }>`
  width: max-content;
  padding: 6px;
  background-color: ${({ isVisible }) => (isVisible ? "#414144" : "none")};
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const IconMathSC = styled.div`
  width: 15px;
`;
const OpenNewRowWrapSC = styled.div`
  display: flex;
`;
export const useTableRowStyle = () => ({
  TableRowSC,
  TableLvlSC,
  TableRowWrapSC,
  TableLvlShowSC,
  FileDescriptionSC,
  TableLvlContentSC,
  IconMathSC,
  OpenNewRowWrapSC,
});
