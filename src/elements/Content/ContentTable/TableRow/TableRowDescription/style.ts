import styled from "styled-components";

const TR_Description_SC = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  line-height: 100%;
  width: 50px;
  z-index: 10;
`;
const TR_Icon_SC = styled.div`
  width: 20px;
  height: 15px;
  margin: 0px 10px;
`;
export const useTRowDescriptionStyle = () => ({
  TR_Description_SC,
  TR_Icon_SC,
});
