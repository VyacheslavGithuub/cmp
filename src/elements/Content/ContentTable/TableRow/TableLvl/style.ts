import styled from "styled-components";

const TableLvlSC = styled.div<{ leftPadding: number }>`
  padding-left: ${({ leftPadding }) => leftPadding + "px"};
  display: flex;
  width: 120px;

  img {
    width: 18px;
    height: 17px;
  }
`;
const TableLvlShowSC = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  margin-right: 5px;
  transition: rotate(${({ isOpen }) => (isOpen ? "0deg" : "180deg")});
  margin-top: 5px;
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
export const useTableLvlStyle = () => ({
  TableLvlSC,
  TableLvlShowSC,
  TableLvlContentSC,
});
