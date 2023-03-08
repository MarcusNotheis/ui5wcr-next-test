import { Bar } from "@ui5/webcomponents-react/ssr";

export default function BarPage() {
  return (
    <Bar startContent={<span>Start</span>} endContent={<span>End</span>}>
      <span>Center</span>
    </Bar>
  );
}
