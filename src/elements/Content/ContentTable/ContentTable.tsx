import React, { useState } from "react";
import IconCross from "../../../img/IconCross";
import IconMinus from "../../../img/IconMinus";
import { cmpApi } from "../../../services/CmpService";
import { useContentTableStyle } from "./style";
import TableInput from "./TableInput/TableInput";
import TableRow from "./TableRow/TableRow";
import IconFile from "../../../img/IconFile.png";

function ContentTable() {
  const eID = 31344;
  const { data, error, isLoading } = cmpApi.useGetEntityQuery(eID);

  const { ContentTableSC, IconCrossSC, CreateNewRowWrapSC, NewRowIconSC } =
    useContentTableStyle();
  const [isShowInput, setShowInput] = useState(false);
  const addTableInput = () => setShowInput(!isShowInput);

  return (
    <ContentTableSC>
      {isLoading && <h2>Loading...</h2>}
      {error && "Error!!!"}
      {/* Если таблица пуста, отображаем инпут для создания первой строки */}
      {data && data.length > 0
        ? data.map((i) => <TableRow key={i.id} isData={i} numberFile={0} />)
        : !isLoading &&
          !error && (
            <div style={{ marginTop: "15px" }}>
              <TableInput id={null} variantForm="addArrow" />
            </div>
          )}

      {isShowInput && (
        <CreateNewRowWrapSC>
          <NewRowIconSC>
            <img src={IconFile} alt={"Icon"} />
          </NewRowIconSC>
          <TableInput id={null} variantForm="addArrow" />
        </CreateNewRowWrapSC>
      )}
      {data && data.length > 0 && (
        <IconCrossSC onClick={addTableInput}>
          {isShowInput ? <IconMinus /> : <IconCross />}
        </IconCrossSC>
      )}
    </ContentTableSC>
  );
}
export default React.memo(ContentTable);
