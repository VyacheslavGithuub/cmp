import TableInput from "../TableInput/TableInput";
import { useTableAddNewRowStyle } from "./style";
import IconFile from "../../../../img/IconFile.png";
import { ITableAddNewRowProps } from "../../../../../types";


export default function TableAddNewRow({
  id,
  variantForm,
  leftPadding,
}: ITableAddNewRowProps) {
  const { TableAddNewRowSC, NewRowIconSC } = useTableAddNewRowStyle();

  return (
    <TableAddNewRowSC>
      <NewRowIconSC leftPadding={leftPadding}>
        <img src={IconFile} alt={"Icon"} />
      </NewRowIconSC>
      <TableInput id={id} variantForm={variantForm} />
    </TableAddNewRowSC>
  );
}
