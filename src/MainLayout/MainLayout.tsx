import Content from "../elements/Content/Content";
import Header from "../elements/Header/Header";
import Sidebar from "../elements/Sidebar/Sidebar";
import { useMainLayoutStyle } from "./style";

export default function MainLayout() {
  const { MainLayoutSC, MainContentSC } = useMainLayoutStyle();

  return (
    <MainLayoutSC>
      <Header />
      <MainContentSC>
        <Sidebar />
        <Content />
      </MainContentSC>
    </MainLayoutSC>
  );
}
