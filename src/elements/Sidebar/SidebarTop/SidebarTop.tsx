import { useSidebarTopStyle } from "./style";
import IconArrowDown from "../../../img/IconArrowDown.png";

export default function SidebarTop() {
  const { SidebarTopSC } = useSidebarTopStyle();

  return (
    <SidebarTopSC>
      <div>
        <h3>Название проекта</h3>
        <h4>Аббревиатура</h4>
      </div>
      <img src={IconArrowDown} />
    </SidebarTopSC>
  );
}
