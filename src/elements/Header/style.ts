import styled from "styled-components";

const HeaderSC = styled.header`
  display: flex;
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.auxiliary};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const HeaderTabSC = styled.li`
  width: 25%;
  list-style-type: none;
  text-align: center;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 200%;
  a {
    cursor: pointer;
    font-weight: 400;
    position: relative;
    color: ${({ theme }) => theme.textAuxiliary};
    cursor: pointer;
    line-height: 1;
    text-decoration: none;
    &:after {
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      height: 2px;

      background-color: ${({ theme }) => theme.textMain};
      content: "";
      transition: width 0.3s ease-out;
    }
  }
  a:hover:after,
  a:focus:after {
    width: 100%;
    color: ${({ theme }) => theme.textMain};
  }
  a:hover {
    color: ${({ theme }) => theme.textMain};
  }
`;
const HeaderWrapSC = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  height: 100%;
  align-items: center;
`;
export const useHeaderStyle = () => ({
  HeaderSC,
  HeaderTabSC,
  HeaderWrapSC,
});
