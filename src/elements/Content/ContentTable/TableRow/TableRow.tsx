import React from "react";
import { IGetEntity, ITableRowProps } from "../../../../../types";
import { useTableRowStyle } from "./style";
import TableInput from "../TableInput/TableInput";
import { useTableRow } from "./useTableRow";
import TableLvl from "./TableLvl/TableLvl";
import TableAddNewRow from "../TableAddNewRow/TableAddNewRow";

function TableRow({ numberFile, isData }: ITableRowProps) {
  const { TableRowSC, TableRowWrapSC } = useTableRowStyle();

  const {
    id,
    child,
    salary,
    nestingNumber,
    isOpen,
    setOpen,
    rowName,
    overheads,
    leftPadding,
    equipmentCosts,
    estimatedProfit,
    isOpenNewRow,
    handleOpenNewRow,
  } = useTableRow({ isData: isData, numberFile: numberFile });

  return (
    <>
      <TableRowWrapSC isOpen={isOpen}>
        <TableRowSC>
          {/* Перый столбец */}
          <TableLvl
            id={id}
            isOpen={isOpen}
            setOpen={setOpen}
            leftPadding={leftPadding}
            nestingNumber={nestingNumber}
            isOpenNewRow={isOpenNewRow}
            handleOpenNewRow={handleOpenNewRow}
          />

          {/*следом отображаем  все оствльные данные в строке*/}
          <TableInput
            id={id}
            rowName={rowName}
            salary={salary}
            equipmentCosts={equipmentCosts}
            overheads={overheads}
            estimatedProfit={estimatedProfit}
            variantForm="updateRow"
          />
        </TableRowSC>

        {/* Создание новой строки */}
        {isOpenNewRow && (
          <TableAddNewRow
            id={id}
            variantForm="addArrow"
            leftPadding={leftPadding + 36}
          />
        )}
        {/* Если в массиве есть child используем рекурсию */}
        {child.length > 0 &&
          child.map((i: IGetEntity) => (
            <TableRow key={i.id} isData={i} numberFile={nestingNumber} />
          ))}
      </TableRowWrapSC>
    </>
  );
}

export default React.memo(TableRow);
