import { useState } from "react";
import { cmpApi } from "../../../services/CmpService";

export default function useContentTable() {
  const eID = import.meta.env.VITE_SOME_KEY;
  const { data, error, isLoading } = cmpApi.useGetEntityQuery(eID);
  const [isShowInput, setShowInput] = useState(false);
  const addTableInput = () => setShowInput(!isShowInput);
  return {
    isLoading,
    error,
    data,
    isShowInput,
    addTableInput,
  };
}
