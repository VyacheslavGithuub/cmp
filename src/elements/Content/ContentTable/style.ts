import styled from "styled-components";

const ContentTableSC = styled.div`
  padding: 0px 10px;
`;
const IconCrossSC = styled.div`
  margin: 15px 0px 0px 15px;
  width: 20px;
  height: 20px;
`;
const CreateNewRowWrapSC = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
`;
const NewRowIconSC = styled.div`
  width: 110px;
  padding-left: 15px;
`;

export const useContentTableStyle = () => ({
  ContentTableSC,
  IconCrossSC,
  CreateNewRowWrapSC,
  NewRowIconSC,
});
