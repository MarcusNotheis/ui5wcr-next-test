import { Popover } from "@ui5/webcomponents-react/ssr";

export default function PopoverPage() {
  return (
    <>
      <span id={"opener"}>Hello</span>
      <Popover open opener="opener" />
    </>
  );
}
