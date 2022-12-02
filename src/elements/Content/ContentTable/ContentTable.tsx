import { cmpApi } from "../../../services/CmpService";
import TableRow from "./TableRow/TableRow";

export default function ContentTable() {
  const eID = 31320;
  const { data, error, isLoading } = cmpApi.useGetEntityQuery(eID);
  console.log(data);

  return (
    <div style={{ padding: "0px 20px" }}>
      {isLoading && <h2>Loading...</h2>}
      {error && "Error!!!"}
      {data ? (
        data.map((i) => <TableRow key={i.id} data={i} numberFile={0} />)
      ) : (
        <>....</>
      )}
    </div>
  );
}
