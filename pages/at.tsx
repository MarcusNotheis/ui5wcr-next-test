import rawdata from "./data.json";
import { AnalyticalTable, Button, TextAlign } from "@ui5/webcomponents-react/ssr";
import { useEffect, useState } from "react";
import deleteIcon from '@ui5/webcomponents-icons/dist/delete';

let columns = [
  {
    Header: "Name",
    accessor: "name",
    headerTooltip: "Full Name",
  },
  {
    Header: "Age",
    accessor: "age",
    className: "superCustomClass",
    disableFilters: false,
    disableGroupBy: true,
    disableSortBy: false,
    hAlign: TextAlign.End,
  },
  {
    Header: "Friend Name",
    accessor: "friend.name",
  },
  {
    accessor: "friend.age",
    hAlign: TextAlign.End,
  },
  {
    Header: "Actions",
    accessor: ".",
    disableFilters: true,
    disableGroupBy: true,
    disableResizing: true,
    disableSortBy: true,
    id: "actions",
    width: 100,
    Cell: () => <Button icon={deleteIcon} />
  },
];
export default function AnalyticalTablePage() {
  const [data, setData] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      setData(rawdata);
    }, 2000);

  }, [])

  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      loading={data.length === 0}
      filterable
      groupable
      header="Table Title"
      infiniteScroll
      selectionMode="MultiSelect"
      withRowHighlight
    />
  );
}
