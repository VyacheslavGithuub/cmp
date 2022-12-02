import { useState } from "react";
import { IGetEntity } from "../../../../../types";
import { useTableRowStyle } from "./style";
import IconFile from "../../../../img/IconFile.png";
import IconFolderOne from "../../../../img/IconFolderOne.png";
import IconFolderTwo from "../../../../img/IconFolderTwo.png";
import IconTriangle from "../../../../img/IconTriangle";

interface ITableRowProps {
  numberFile: number;
  data: IGetEntity;
}

export default function TableRow({ numberFile, data }: ITableRowProps) {
  const { TableRowSC, TableLvlSC, TableRowWrapSC, TableLvlShowSC } =
    useTableRowStyle();
  const { child, salary, rowName, overheads, equipmentCosts, estimatedProfit } =
    data;
  const [isOpen, setOpen] = useState<boolean>(true);
  console.log(isOpen);

  let number = numberFile;
  let leftPadding = number * 10;
  child.length > 0 ? (number = numberFile + 1) : (number = 0);

  let typeFile =
    number === 1
      ? IconFolderOne
      : number === 2
      ? IconFolderTwo
      : number === 0
      ? IconFile
      : "";
  return (
    <TableRowWrapSC isOpen={isOpen}>
      <TableRowSC>
        <TableLvlSC leftPadding={leftPadding} number={number}>
          {number > 0 && (
            <TableLvlShowSC onClick={() => setOpen(!isOpen)} isOpen={isOpen}>
              <IconTriangle rotate={isOpen ? "0" : "180"} />
            </TableLvlShowSC>
          )}

          <img src={typeFile} alt={number + ""} />
        </TableLvlSC>
        <div>{rowName}</div>
        <div>{salary}</div>
        <div>{equipmentCosts}</div>
        <div>{overheads}</div>
        <div>{estimatedProfit}</div>
      </TableRowSC>
      {child.length > 0 &&
        child.map((i) => <TableRow key={i.id} data={i} numberFile={number} />)}
    </TableRowWrapSC>
  );
}
