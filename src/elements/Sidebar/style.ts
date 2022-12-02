import styled from "styled-components";

const SidebarSC = styled.nav`
  width: 240px;
  min-height: calc(100vh - 44px);
  background-color: ${({ theme }) => theme.auxiliary};
  border-right: 1px solid ${({ theme }) => theme.border};
`;
const SidebarMenuSC = styled.ul`
  list-style-type: none;
`;
const SM_Item_SC = styled.li<{ isActive: boolean }>`
  padding-left: 20px;
  font-size: 14px;
  height: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isActive }) => isActive && "rgba(250, 250, 250, 0.5)"};

  img {
    width: 25px;
    margin-right: 13px;
  }

  &:hover {
    background-color: rgba(250, 250, 250, 0.2);
  }
`;
export const useSidebarStyle = () => ({
  SidebarSC,
  SM_Item_SC,
  SidebarMenuSC,
});
