import { cmpApi } from "./../../../../../services/CmpService";
export default function useTableRowDescription(id: number) {
  const [deleteRow, {}] = cmpApi.useDeleteRowMutation();
  const eID = import.meta.env.VITE_SOME_KEY;
  // useDeleteRowMutation
  const handleDeleteRow = () => {
    let data = {
      eID: eID,
      rID: id,
    };
    deleteRow(data);
  };
  return { handleDeleteRow };
}
