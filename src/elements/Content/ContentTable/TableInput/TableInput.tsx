import useTableInput from "./useTableInput";
import { Controller } from "react-hook-form";
import { ITableInputProps } from "../../../../../types";
import { useTableInputStyle } from "./style";

// Компонент для отправки данных на сервер / переиспользуем
export default function TableInput({
  id,
  rowName,
  salary,
  equipmentCosts,
  overheads,
  estimatedProfit,
  variantForm,
}: ITableInputProps) {
  const { FormSC, TableInputSC } = useTableInputStyle();
  const { handleSubmit, onSubmit, control } = useTableInput({
    id,
    rowName,
    salary,
    equipmentCosts,
    overheads,
    estimatedProfit,
    variantForm,
  });

  return (
    <FormSC onSubmit={handleSubmit(onSubmit)}>
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
      {/* Костыльно, но иначе, нажимая на Enter, форма не отправляется */}
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

 