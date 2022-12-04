import React from "react";
import TableRow from "./TableRow/TableRow";
import IconCross from "../../../img/IconCross";
import IconMinus from "../../../img/IconMinus";
import { useContentTableStyle } from "./style";
import useContentTable from "./useContentTable";
import TableAddNewRow from "./TableAddNewRow/TableAddNewRow";

// Основной компонент таблицы
function ContentTable() {
  // Подключаем стили
  const { ContentTableSC, IconCrossSC } = useContentTableStyle();
  // деструктуризируем хук
  const { isLoading, error, data, isShowInput, addTableInput } =
    useContentTable();

  return (
    <ContentTableSC>
      {/* Проверки */}
      {isLoading && <h2>Loading...</h2>}
      {error &&
        "К сожалению Github pages не поддерживает запросы на незащищенный http:// "}
      {/* Отображаем существующие строки таблицы */}
      {data && data.length > 0
        ? data.map((i) => <TableRow key={i.id} isData={i} numberFile={0} />)
        : // Если таблица пуста, отобразить инпут для создания
          !isLoading &&
          !error && <TableAddNewRow id={null} variantForm="addArrow" />}
      {/* Если нажали на +/- отобразим/скроем инпут для создания новой строки */}
      {isShowInput && <TableAddNewRow id={null} variantForm="addArrow" />}
      {/* Если таблица не пуста, показываем +/- для создания новой строки */}
      {data && data.length > 0 && (
        <IconCrossSC onClick={addTableInput}>
          {isShowInput ? <IconMinus /> : <IconCross />}
        </IconCrossSC>
      )}
    </ContentTableSC>
  );
}
export default React.memo(ContentTable);
