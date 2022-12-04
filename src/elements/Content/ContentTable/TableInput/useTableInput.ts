import { ITableInputProps } from "./../../../../../types.d";
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
  variantForm,
}: ITableInputProps) {
  const [addRowCreate, {}] = cmpApi.useAddRowCreateMutation();
  const [updateRow, {}] = cmpApi.useUpdateRowMutation();

  const { control, handleSubmit, reset } = useForm({
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

  const sendAddRow = (dataForm: any) => {
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
  const sendUpdateRow = (dataForm: any) => {
    let {
      equipmentCosts,
      estimatedProfit,
      machineOperatorSalary,
      mainCosts,
      materials,
      mimExploitation,
      overheads,
      rowName,
      salary,
      supportCosts,
    } = dataForm;
    let updateData = {
      eID: 31344,
      rID: id,
      request: {
        equipmentCosts: equipmentCosts,
        estimatedProfit: estimatedProfit,
        machineOperatorSalary: machineOperatorSalary,
        mainCosts: mainCosts,
        materials: materials,
        mimExploitation: mimExploitation,
        overheads: overheads,
        rowName: rowName,
        salary: salary,
        supportCosts: supportCosts,
      },
    };
    updateRow(updateData);
  };

  const onSubmit: SubmitHandler<IFormInput> = (dataForm) => {
    variantForm === "addArrow"
      ? sendAddRow(dataForm)
      : variantForm === "updateRow" && sendUpdateRow(dataForm);
  };

  return {
    handleSubmit,
    onSubmit,
    control,
  };
}
