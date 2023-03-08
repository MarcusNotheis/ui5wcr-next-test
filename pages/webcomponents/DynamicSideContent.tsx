import { DynamicSideContent } from "@ui5/webcomponents-react/ssr";

export default function DynamicSideContentPage() {
  return (
    <DynamicSideContent sideContent={<span>Side Content</span>}>
      <span>Main Content</span>
    </DynamicSideContent>
  );
}
