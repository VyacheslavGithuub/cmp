import { ITableInputProps } from "./../../../../../types.d";
import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { IFormInput } from "../../../../../types";
import { cmpApi } from "../../../../services/CmpService";

export default function useTableInput({
  id,
  rowName,
  salary,
  equipmentCosts,
  overheads,
  estimatedProfit,
}: ITableInputProps) {
  const [addRowCreate, {}] = cmpApi.useAddRowCreateMutation();

  const { control, handleSubmit, setFocus, reset } = useForm({
    defaultValues: {
      equipmentCosts: equipmentCosts || 0,
      estimatedProfit: estimatedProfit || 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: overheads || 0,
      parentId: id,
      rowName: rowName || "",
      salary: salary || 0,
      supportCosts: 0,
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (dataForm) => {
    let sendData = {
      eID: 31344,
      sendData: dataForm,
    };
    addRowCreate(sendData);
    reset({
      rowName: "",
      salary: 0,
      equipmentCosts: 0,
      overheads: 0,
      estimatedProfit: 0,
    });
  };

  useEffect(() => {
    setFocus("rowName");
  }, [setFocus]);
  return {
    handleSubmit,
    onSubmit,
    control,
  };
}
