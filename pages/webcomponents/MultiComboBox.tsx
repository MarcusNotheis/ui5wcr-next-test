import {
  MultiComboBox,
  MultiComboBoxGroupItem,
  MultiComboBoxItem,
} from "@ui5/webcomponents-react/ssr";

export default function MultiComboBoxPage() {
  return (
    <MultiComboBox>
      <MultiComboBoxGroupItem text={"MCB Group Item"} />{" "}
      <MultiComboBoxItem text="MCB Item" />
    </MultiComboBox>
  );
}
