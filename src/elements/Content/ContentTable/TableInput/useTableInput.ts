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
  // Достаём экшен на добавление объекта на сервер
  const [addRowCreate, {}] = cmpApi.useAddRowCreateMutation();
  // Достам экшен для обновлённия оъекта
  const [updateRow, {}] = cmpApi.useUpdateRowMutation();
  // Получаем eID
  const eID = import.meta.env.VITE_SOME_KEY;
  // Достаём всё необходимое из useForm и объявляем defaultValues
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
  // Функция для добавления строки на сервер
  const sendAddRow = (dataForm: any) => {
    let sendData = {
      eID: eID,
      sendData: dataForm,
    };
    addRowCreate(sendData);
    reset();
  };
  // Функция для добавления измененной строки
  const sendUpdateRow = (dataForm: any) => {
    let updateData = {
      eID: eID,
      rID: id,
      request: dataForm,
    };
    updateRow(updateData);
  };
  // Функция для отправки формы
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
