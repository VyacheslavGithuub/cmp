// Интерфейсы для работы с сервером
export interface IAddEntity {
  id: number;
  rowName: string;
}
export interface IRowDeleteProps {
  eID: number;
  rID: number;
}
export interface IGetEntity {
  child: IGetEntity[];
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
}

export interface ICurrent {
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
}
export interface IChanged {
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
}

export interface IAddRowCreateResponse {
  current: ICurrent;
  changed: IChanged[];
}

export interface IAddRowCreate {
  eID: number;
  sendData: {
    equipmentCosts: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    parentId?: number | null;
    rowName: string;
    salary: number;
    supportCosts: number;
  };
}

export interface IFormInput {
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  parentId: number | null;
  supportCosts: number;
}

// Компоненты
export interface ITableAddNewRowProps {
  id: null | number;
  variantForm: "addArrow" | "updateRow";
  leftPadding?: number;
}
export interface ITableInputProps {
  id: number | null;
  rowName?: string;
  salary?: number;
  equipmentCosts?: number;
  overheads?: number;
  estimatedProfit?: number;
  variantForm: "addArrow" | "updateRow";
}
export interface IRowUpdateProps {
  eID: number;
  rID: number | null;
  request: {
    equipmentCosts: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    rowName: string;
    salary: number;
    supportCosts: number;
  };
}
export interface ITableLvlProps {
  id: number;
  leftPadding: number;
  nestingNumber: number;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  isOpenNewRow: boolean;
  handleOpenNewRow: () => void;
}
export interface ITableRowDescriptionProps {
  handleOpenNewRow: () => void;
  isOpenNewRow: boolean;
  id: number;
}
export interface ITableRowProps {
  numberFile: number;
  isData: IGetEntity;
}
export interface IContentTabProps {
  titleTab: string;
}
