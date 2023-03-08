import { ResponsivePopover } from "@ui5/webcomponents-react/ssr";

export default function ResponsivePopoverPage() {
  return (
    <>
      <span id="opener">Opener</span>
      <ResponsivePopover open opener="opener" />
    </>
  );
}
