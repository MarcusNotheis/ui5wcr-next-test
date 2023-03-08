import {
  Label,
  Table,
  TableCell,
  TableColumn,
  TableGroupRow,
  TableRow,
} from "@ui5/webcomponents-react/ssr";

export default function TablePage() {
  return (
    <Table
      columns={
        <>
          <TableColumn style={{ width: "12rem" }}>
            <Label>Product</Label>
          </TableColumn>
          <TableColumn minWidth={800} popinText="Supplier">
            <Label>Supplier</Label>
          </TableColumn>
          <TableColumn demandPopin minWidth={600} popinText="Dimensions">
            <Label>Dimensions</Label>
          </TableColumn>
          <TableColumn demandPopin minWidth={600} popinText="Weight">
            <Label>Weight</Label>
          </TableColumn>
          <TableColumn>
            <Label>Price</Label>
          </TableColumn>
        </>
      }
      onLoadMore={function ka() {}}
      onPopinChange={function ka() {}}
      onRowClick={function ka() {}}
      onSelectionChange={function ka() {}}
    >
      <TableRow>
        <TableCell>
          <Label>Notebook Basic</Label>
        </TableCell>
        <TableCell>
          <Label>Very Best Screens</Label>
        </TableCell>
        <TableCell>
          <Label>30 x 18 x 3cm</Label>
        </TableCell>
        <TableCell>
          <Label>4.2KG</Label>
        </TableCell>
        <TableCell>
          <Label>956EUR</Label>
        </TableCell>
      </TableRow>
      <TableGroupRow>TableGroupRow</TableGroupRow>
      <TableRow>
        <TableCell>
          <Label>Notebook Basic 17HT-1001</Label>
        </TableCell>
        <TableCell>
          <Label>Very Best Screens</Label>
        </TableCell>
        <TableCell>
          <Label>29 x 17 x 3.1cm</Label>
        </TableCell>
        <TableCell>
          <Label>4.5KG</Label>
        </TableCell>
        <TableCell>
          <Label>1249EUR</Label>
        </TableCell>
      </TableRow>
    </Table>
  );
}
