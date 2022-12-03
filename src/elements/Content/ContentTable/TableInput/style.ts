import styled from "styled-components";

const FormSC = styled.form`
  width: 100%;
  font-size: 14px;
  display: grid;

  grid-template-columns: 1fr 197px 197px 197px 197px;
  align-items: center;

  button {
    background: none;
    border: none;
    text-align: left;
  }
`;

const TableInputSC = styled.input`
  width: 95%;
  height: 36px;
  background: none;
  outline: none;
  border-radius: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.textMain};
  border: none;

  &:focus {
    color: ${({ theme }) => theme.textAuxiliary};
    border: 1px solid ${({ theme }) => theme.border};

    padding-left: 10px;
  }
`;

export const useTableInputStyle = () => ({
  FormSC,
  TableInputSC,
});
