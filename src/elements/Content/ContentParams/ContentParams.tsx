import { useContentParamsStyle } from "./style";

export default function ContentParams() {
  const { ContentParamsSC } = useContentParamsStyle();

  return (
    <ContentParamsSC>
      <div>Уровень</div>
      <div>Наименование работ</div>
      <div>Основная з/п</div>
      <div>Оборудование</div>
      <div>Накладные расходы</div>
      <div>Сметная прибыль</div>
    </ContentParamsSC>
  );
}
