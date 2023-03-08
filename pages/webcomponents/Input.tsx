import {
  Input,
  SuggestionGroupItem,
  SuggestionItem,
} from "@ui5/webcomponents-react/ssr";
import { useEffect, useState } from "react";

export default function InputPage() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    import("@ui5/webcomponents/dist/features/InputSuggestions.js").then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) {
    return null;
  }
  return (
    <Input
      showSuggestions
      placeholder="type anything to show suggestions"
      style={{ width: "400px" }}
    >
      <SuggestionGroupItem text="A Group" />
      <SuggestionItem
        icon="globe"
        text="United States"
        additionalText={"USA"}
        description={"My Description"}
      />
      <SuggestionItem icon="globe" text="Bulgaria" iconEnd />
      <SuggestionGroupItem text="Another Group Items" />
      <SuggestionItem icon="globe" text="Argentina" />
      <SuggestionItem icon="globe" text="Germany" />
      <SuggestionItem icon="globe" text="Iceland" />
      <SuggestionItem icon="globe" text="Moldova" />
    </Input>
  );
}
