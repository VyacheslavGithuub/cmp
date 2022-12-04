import { useState } from "react";
import { ITableRowProps } from "../../../../../types";

export function useTableRow({ numberFile, isData }: ITableRowProps) {
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
  const [isOpenNewRow, setOpenNewRow] = useState<boolean>(false);
  const handleOpenNewRow = () => setOpenNewRow(!isOpenNewRow);

  let nestingNumber = numberFile;
  let leftPadding = nestingNumber * 20;
  child.length > 0 ? (nestingNumber = numberFile + 1) : (nestingNumber = 0);

  return {
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
  };
}
