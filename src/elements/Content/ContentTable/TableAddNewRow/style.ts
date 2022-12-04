import styled from "styled-components";

const TableAddNewRowSC = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
`;
const NewRowIconSC = styled.div<{ leftPadding?: number }>`
  width: 110px;
  padding-left: ${({ leftPadding }) =>
    leftPadding ? leftPadding + "px" : "15px"};
`;
export const useTableAddNewRowStyle = () => ({
  TableAddNewRowSC,
  NewRowIconSC,
});
