import { useHeaderStyle } from "./style";
import IconHeaderTable from "../../img/IconHeaderTable.png";
import IconHeaderArrow from "../../img/IconHeaderArrow.png";

export default function Header() {
  const { HeaderSC, HeaderWrapSC, HeaderTabSC } = useHeaderStyle();

  return (
    <HeaderSC>
      <HeaderWrapSC>
        <img src={IconHeaderTable} />
        <img src={IconHeaderArrow} />
        <HeaderTabSC>
          <a href="#">Просмотр</a>
        </HeaderTabSC>
        <HeaderTabSC>
          <a href="#">Управление</a>
        </HeaderTabSC>
      </HeaderWrapSC>
    </HeaderSC>
  );
}
