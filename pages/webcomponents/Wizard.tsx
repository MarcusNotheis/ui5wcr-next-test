import {
  Button,
  Label,
  MessageStrip,
  Title,
  Wizard,
  WizardStep,
} from "@ui5/webcomponents-react/ssr";

export default function WizardPage() {
  return (
    <Wizard
      onStepChange={function ka() {}}
      style={{
        height: "400px",
      }}
    >
      <WizardStep icon="product" selected titleText="Product Type">
        <Title>1. Product Type</Title>
        <MessageStrip>
          The Wizard control is supposed to break down large tasks, into smaller
          steps, easier for the user to work with.
        </MessageStrip>
        <Label wrappingType="None">
          Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus
          sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet,
          feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie
          neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris
          vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor,
          nec dignissim quam convallis ut. Praesent vitae commodo felis, ut
          iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh.
          Suspendisse est velit, scelerisque ut commodo eget, dignissim quis
          metus. Cras faucibus consequat gravida. Curabitur vitae quam felis.
          Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam
          erat volutpat
        </Label>
        <Button design="Emphasized" onClick={function ka() {}}>
          Step 2
        </Button>
      </WizardStep>
    </Wizard>
  );
}
