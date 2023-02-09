import { DynamicPage } from "@ui5/webcomponents-react/ssr/components/DynamicPage";
import { DynamicPageHeader } from "@ui5/webcomponents-react/ssr/components/DynamicPageHeader";
import { DynamicPageTitle } from "@ui5/webcomponents-react/ssr/components/DynamicPageTitle";
import { FlexBox } from "@ui5/webcomponents-react/ssr/components/FlexBox";
import { ObjectStatus } from "@ui5/webcomponents-react/ssr/components/ObjectStatus";
import {
  Badge,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  Label,
  Title,
} from "@ui5/webcomponents-react/ssr/webComponents";
import iconAction from '@ui5/webcomponents-icons/dist/action.js';
import iconDecline from '@ui5/webcomponents-icons/dist/decline.js';
import iconFullScreen from '@ui5/webcomponents-icons/dist/full-screen.js';
import iconExitFullScreen from '@ui5/webcomponents-icons/dist/exit-full-screen.js';

export default function DynamicPageTest() {
  return (
    <DynamicPage
      headerContent={
        <DynamicPageHeader>
          <FlexBox wrap="Wrap">
            <FlexBox direction="Column">
              <Label>Location: Warehouse A</Label>
              <Label>Halway: 23L</Label>
              <Label>Rack: 34</Label>
            </FlexBox>
            <span style={{ width: "1rem" }} />
            <FlexBox direction="Column">
              <Label>Availability:</Label>
              <ObjectStatus state="Success">In Stock</ObjectStatus>
            </FlexBox>
          </FlexBox>
        </DynamicPageHeader>
      }
      headerTitle={
        <DynamicPageTitle
          actions={
            <>
              <Button design="Emphasized">Edit</Button>
              <Button design="Transparent">Delete</Button>
              <Button design="Transparent">Copy</Button>
              <Button design="Transparent" icon={iconAction} />
            </>
          }
          breadcrumbs={
            <Breadcrumbs>
              <BreadcrumbsItem>Home</BreadcrumbsItem>
              <BreadcrumbsItem>Page 1</BreadcrumbsItem>
              <BreadcrumbsItem>Page 2</BreadcrumbsItem>
              <BreadcrumbsItem>Page 3</BreadcrumbsItem>
              <BreadcrumbsItem>Page 4</BreadcrumbsItem>
              <BreadcrumbsItem>Page 5</BreadcrumbsItem>
            </Breadcrumbs>
          }
          header={<Title>Header Title</Title>}
          navigationActions={
            <>
              <Button design="Transparent" icon={iconFullScreen} />
              <Button design="Transparent" icon={iconExitFullScreen} />
              <Button design="Transparent" icon={iconDecline} />
            </>
          }
          subHeader={<Label>This is a sub header</Label>}
        >
          <Badge>Status: OK</Badge>
        </DynamicPageTitle>
      }
      style={{
        maxHeight: "700px",
      }}
    >
      <span>Hello World!!!</span>
    </DynamicPage>
  );
}
