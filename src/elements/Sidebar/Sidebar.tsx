import { useSidebarStyle } from "./style";
import SidebarObj from "./SidebarObj.json";
import SidebarTop from "./SidebarTop/SidebarTop";
import IconSidebar from "../../img/IconSidebar.png";

export default function Sidebar() {
  const { SidebarSC, SidebarMenuSC, SM_Item_SC } = useSidebarStyle();
  return (
    <SidebarSC>
      <SidebarTop />
      <SidebarMenuSC>
        {SidebarObj.map((i) => (
          <SM_Item_SC key={i.title} isActive={i.active}>
            <img src={IconSidebar} />
            {i.title}
          </SM_Item_SC>
        ))}
      </SidebarMenuSC>
    </SidebarSC>
  );
}
