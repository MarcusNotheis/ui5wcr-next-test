import {
  SegmentedButton,
  SegmentedButtonItem,
} from "@ui5/webcomponents-react/ssr";

export default function SegmentedButtonPage() {
  return (
    <SegmentedButton>
      <SegmentedButtonItem>Button 1</SegmentedButtonItem>
      <SegmentedButtonItem pressed>Button 2</SegmentedButtonItem>
      <SegmentedButtonItem>Button 3</SegmentedButtonItem>
    </SegmentedButton>
  );
}
