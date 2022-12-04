import { useState } from "react";
import IconFile from "../../../../../img/IconFile.png";
import IconFolderOne from "../../../../../img/IconFolderOne.png";
import IconFolderTwo from "../../../../../img/IconFolderTwo.png";

export default function useTableLvl(nestingNumber: number) {
  const [isFileDescription, setFileDescription] = useState<boolean>(false);
  let typeFile =
    nestingNumber === 1
      ? IconFolderOne
      : nestingNumber === 2
      ? IconFolderTwo
      : IconFile;

 
  return {
    isFileDescription,
    setFileDescription,
    typeFile,
  };
}
