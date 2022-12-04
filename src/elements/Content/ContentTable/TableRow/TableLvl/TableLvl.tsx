import { useTableLvlStyle } from "./style";
import IconTriangle from "../../../../../img/IconTriangle";
import TableRowDescription from "../TableRowDescription/TableRowDescription";
import useTableLvl from "./useTableLvl";
import { ITableLvlProps } from "../../../../../../types";

export default function TableLvl({
  id,
  isOpen,
  setOpen,
  leftPadding,
  nestingNumber,
  isOpenNewRow,
  handleOpenNewRow,
}: ITableLvlProps) {
  const { TableLvlSC, TableLvlShowSC, TableLvlContentSC } = useTableLvlStyle();
  const { isFileDescription, setFileDescription, typeFile } =
    useTableLvl(nestingNumber);

  return (
    <TableLvlSC leftPadding={leftPadding}>
      {/* Треугольник + функция отвечающая за сокрытие папок */}
      {nestingNumber > 0 && (
        <TableLvlShowSC onClick={() => setOpen(!isOpen)} isOpen={isOpen}>
          <IconTriangle rotate={isOpen ? "0" : "180"} />
        </TableLvlShowSC>
      )}
      {/* функциональный блок с серым фоном */}
      <TableLvlContentSC
        isVisible={isFileDescription}
        onMouseOver={() => setFileDescription(true)}
        onMouseOut={() => setFileDescription(false)}
      >
        {/* Отображаем иконку папка или файл */}
        <img src={typeFile} alt={nestingNumber + ""} />

        {/* показываем дополнительные кнопки */}
        {isFileDescription && (
          <TableRowDescription
            handleOpenNewRow={handleOpenNewRow}
            isOpenNewRow={isOpenNewRow}
            id={id}
          />
        )}
      </TableLvlContentSC>
    </TableLvlSC>
  );
}
