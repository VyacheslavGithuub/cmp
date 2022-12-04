import { useTRowDescriptionStyle } from "./style";
import IconCross from "../../../../../img/IconCross";
import IconMinus from "../../../../../img/IconMinus";
import useTableRowDescription from "./useTableRowDescription";
import IconWasteBin from "../../../../../img/IconWasteBin.png";
import { ITableRowDescriptionProps } from "../../../../../../types";

// Dополнительные кнопки
export default function TableRowDescription({
  handleOpenNewRow,
  isOpenNewRow,
  id,
}: ITableRowDescriptionProps) {
  const { TR_Description_SC, TR_Icon_SC } = useTRowDescriptionStyle();
  const { handleDeleteRow } = useTableRowDescription(id);
  return (
    <TR_Description_SC>
      <TR_Icon_SC onClick={handleOpenNewRow}>
        {isOpenNewRow ? <IconMinus /> : <IconCross />}
      </TR_Icon_SC>
      {/* delete row */}
      <img src={IconWasteBin} alt="icon" onClick={handleDeleteRow} />
    </TR_Description_SC>
  );
}
