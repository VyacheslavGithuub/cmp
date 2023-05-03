import { useState } from "react";
import IconFile from "../../../../../img/IconFile.png";
import IconFolder from "../../../../../img/IconFolder.svg";

export default function useTableLvl(nestingNumber: number) {
  const [isFileDescription, setFileDescription] = useState<boolean>(false);
  let typeFile = nestingNumber ? IconFolder : IconFile;

  return {
    isFileDescription,
    setFileDescription,
    typeFile,
  };
}
