import add from "@ui5/webcomponents-icons/dist/add";
import { ShellBarItem } from "@ui5/webcomponents-react";
import { ShellBar } from "@ui5/webcomponents-react/ssr";

export default function ShellBarPage() {
  return (
    <ShellBar primaryTitle={"Test"}>
      {/*<ShellBarItem icon={add} />*/}
    </ShellBar>
  );
}
