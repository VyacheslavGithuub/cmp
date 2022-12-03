import useTableInput from "./useTableInput";
import { Controller } from "react-hook-form";
import IconFile from "../../../../img/IconFile.png";
import { ITableInputProps } from "../../../../../types";
import { useTableInputStyle } from "./style";

export default function TableInput({
  id,
  rowName,
  salary,
  equipmentCosts,
  overheads,
  estimatedProfit,
}: ITableInputProps) {
  const { FormSC, TableInputSC } = useTableInputStyle();
  const { handleSubmit, onSubmit, control } = useTableInput({
    id,
    rowName,
    salary,
    equipmentCosts,
    overheads,
    estimatedProfit,
  });

  return (
    <FormSC onSubmitCapture={handleSubmit(onSubmit)}>
      <Controller
        name="rowName"
        control={control}
        render={({ field }) => (
          <TableInputSC {...field} required placeholder="Text..." />
        )}
      />
      <Controller
        name="salary"
        control={control}
        render={({ field }) => <TableInputSC {...field} />}
      />
      <Controller
        name="equipmentCosts"
        control={control}
        render={({ field }) => <TableInputSC {...field} />}
      />
      <Controller
        name="overheads"
        control={control}
        render={({ field }) => <TableInputSC {...field} />}
      />
      <Controller
        name="estimatedProfit"
        control={control}
        render={({ field }) => <TableInputSC {...field} />}
      />
      <input
        type="submit"
        style={{
          width: "0px",
          height: "0px",
          background: "none",
          border: "none",
        }}
      />
    </FormSC>
  );
}
