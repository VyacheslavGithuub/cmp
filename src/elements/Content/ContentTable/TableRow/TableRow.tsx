import React, { useState } from "react";
import { IGetEntity } from "../../../../../types";
import { useTableRowStyle } from "./style";
import IconFile from "../../../../img/IconFile.png";
import IconFolderOne from "../../../../img/IconFolderOne.png";
import IconFolderTwo from "../../../../img/IconFolderTwo.png";
import IconTriangle from "../../../../img/IconTriangle";
import TableInput from "../TableInput/TableInput";
import IconCross from "../../../../img/IconCross";
import IconMinus from "../../../../img/IconMinus";

interface ITableRowProps {
  numberFile: number;
  isData: IGetEntity;
}

function TableRow({ numberFile, isData }: ITableRowProps) {
  const {
    TableRowSC,
    TableLvlSC,
    TableRowWrapSC,
    TableLvlShowSC,
    FileDescriptionSC,
    TableLvlContentSC,
    IconMathSC,
    OpenNewRowWrapSC,
  } = useTableRowStyle();
  const {
    id,
    child,
    salary,
    rowName,
    overheads,
    equipmentCosts,
    estimatedProfit,
  } = isData;

  const [isOpen, setOpen] = useState<boolean>(true);

  const [isFileDescription, setFileDescription] = useState<boolean>(false);

  const [isOpenNewRow, setOpenNewRow] = useState<boolean>(false);
  const handleOpenNewRow = () => setOpenNewRow(!isOpenNewRow);

  let number = numberFile;
  let leftPadding = number * 20;
  child.length > 0 ? (number = numberFile + 1) : (number = 0);

  let typeFile =
    number === 1
      ? IconFolderOne
      : number === 2
      ? IconFolderTwo
      : number === 0
      ? IconFile
      : IconFile;

  //////////////

  return (
    <>
      <TableRowWrapSC isOpen={isOpen}>
        <TableRowSC>
          {/* Перый столбец */}
          <TableLvlSC leftPadding={leftPadding}>
            {/* Треугольник + функция отвечающая за сокрытие папок */}
            {number > 0 && (
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
              <img src={typeFile} alt={number + ""} />

              {/* показываем дополнительные кнопки */}
              {isFileDescription && (
                <FileDescriptionSC>
                  <IconMathSC onClick={handleOpenNewRow}>
                    {isOpenNewRow ? <IconMinus /> : <IconCross />}
                  </IconMathSC>
                </FileDescriptionSC>
              )}
            </TableLvlContentSC>
          </TableLvlSC>

          {/*следом отображаем  все оствльные данные в строке*/}
          <TableInput
            id={id}
            rowName={rowName}
            salary={salary}
            equipmentCosts={equipmentCosts}
            overheads={overheads}
            estimatedProfit={estimatedProfit}
          />
        </TableRowSC>

        {/* Создание новой строки */}
        {isOpenNewRow && (
          <TableRowSC>
            <TableLvlSC leftPadding={leftPadding + 26}>
              <img src={IconFile} alt={number + ""} />
            </TableLvlSC>
            <TableInput id={id} />
          </TableRowSC>
        )}

        {child.length > 0 &&
          child.map((i) => (
            <TableRow key={i.id} isData={i} numberFile={number} />
          ))}
      </TableRowWrapSC>
    </>
  );
}

export default React.memo(TableRow);
