import iconAction from "@ui5/webcomponents-icons/dist/action.js";
import iconDecline from "@ui5/webcomponents-icons/dist/decline.js";
import iconExitFullScreen from "@ui5/webcomponents-icons/dist/exit-full-screen.js";
import iconFullScreen from "@ui5/webcomponents-icons/dist/full-screen.js";
import {
  Badge,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  Label,
  ObjectPage,
  ObjectPageSection,
  ObjectPageSubSection,
  ObjectStatus,
  Title,
} from "@ui5/webcomponents-react/ssr";

export default function ObjectPageSample() {
  return (
    <ObjectPage
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
          // breadcrumbs={
          //   <Breadcrumbs>
          //     <BreadcrumbsItem>Home</BreadcrumbsItem>
          //     <BreadcrumbsItem>Page 1</BreadcrumbsItem>
          //     <BreadcrumbsItem>Page 2</BreadcrumbsItem>
          //     <BreadcrumbsItem>Page 3</BreadcrumbsItem>
          //     <BreadcrumbsItem>Page 4</BreadcrumbsItem>
          //     <BreadcrumbsItem>Page 5</BreadcrumbsItem>
          //   </Breadcrumbs>
          // }
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
    >
      <ObjectPageSection id={"first-section"} titleText={"My SSR Section"}>
        <ObjectPageSubSection id={"first-subsection"}>
          <Label>Hi from Object Page</Label>
        </ObjectPageSubSection>
      </ObjectPageSection>
      <ObjectPageSection id={"second-section"} titleText={"My Second Section"}>
        <ObjectPageSubSection id={"second-subsection"}>
          <Label>Hi from Object Page 2</Label>
        </ObjectPageSubSection>
      </ObjectPageSection>
    </ObjectPage>
  );
}
