import {
  ComboBox,
  ComboBoxGroupItem,
  ComboBoxItem,
} from "@ui5/webcomponents-react/ssr";

export default function ComboBoxPage() {
  return (
    <ComboBox>
      <ComboBoxGroupItem text={"ComboBoxGroupItem"} />
      <ComboBoxItem text={"ComboBoxItem"} />
    </ComboBox>
  );
}
