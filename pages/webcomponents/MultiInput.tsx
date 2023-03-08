import { MultiInput, Token } from "@ui5/webcomponents-react/ssr";

export default function MultiInputPage() {
  return (
    <MultiInput
      tokens={
        <>
          <Token text="Argentina" />
          <Token text="Bulgaria" />
          <Token text="England" />
          <Token text="Finland" />
          <Token text="Germany" />
          <Token text="Hungary" />
          <Token text="Italy" />
          <Token text="Luxembourg" />
          <Token text="Mexico" />
          <Token text="Philippines" />
          <Token text="Sweden" />
          <Token text="USA" />
        </>
      }
    />
  );
}
