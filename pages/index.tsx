import { attachBoot } from "@ui5/webcomponents-base/dist/Boot";
import { getLanguage } from "@ui5/webcomponents-base/dist/config/Language";
import { getRTL } from "@ui5/webcomponents-base/dist/config/RTL";
import { getTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import { getEffectiveScopingSuffixForTag } from "@ui5/webcomponents-base/dist/CustomElementsScope";
import { isChrome } from "@ui5/webcomponents-base/dist/Device";
import EventProvider from "@ui5/webcomponents-base/dist/EventProvider";
import { attachLanguageChange } from "@ui5/webcomponents-base/dist/locale/languageChange";
import MediaRange from "@ui5/webcomponents-base/dist/MediaRange";
import { addCustomCSS } from "@ui5/webcomponents-base/dist/Theming";
import { attachThemeLoaded } from "@ui5/webcomponents-base/dist/theming/ThemeLoaded";
import { ResponsivePopoverDomRef } from "@ui5/webcomponents-react/ssr/webComponents/ResponsivePopover";
import { ActionSheet } from "@ui5/webcomponents-react/ssr/components/ActionSheet";
import { AnalyticalCard } from "@ui5/webcomponents-react/ssr/components/AnalyticalCard";
import { AnalyticalCardHeader } from "@ui5/webcomponents-react/ssr/components/AnalyticalCardHeader";
import { AnalyticalTable } from "@ui5/webcomponents-react/ssr/components/AnalyticalTable";
import { TablePlaceholder } from "@ui5/webcomponents-react/ssr/components/AnalyticalTable/defaults/LoadingComponent/TablePlaceholder";
import { DynamicPage } from "@ui5/webcomponents-react/ssr/components/DynamicPage";
import { DynamicPageHeader } from "@ui5/webcomponents-react/ssr/components/DynamicPageHeader";
import { DynamicPageTitle } from "@ui5/webcomponents-react/ssr/components/DynamicPageTitle";
import { FilterBar } from "@ui5/webcomponents-react/ssr/components/FilterBar";
import { FilterGroupItem } from "@ui5/webcomponents-react/ssr/components/FilterGroupItem";
import { FlexBox } from "@ui5/webcomponents-react/ssr/components/FlexBox";
import { Form } from "@ui5/webcomponents-react/ssr/components/Form";
import { FormGroup } from "@ui5/webcomponents-react/ssr/components/FormGroup";
import { FormItem } from "@ui5/webcomponents-react/ssr/components/FormItem";
import { Grid } from "@ui5/webcomponents-react/ssr/components/Grid";
import { Loader } from "@ui5/webcomponents-react/ssr/components/Loader";
import { MessageBox } from "@ui5/webcomponents-react/ssr/components/MessageBox";
import { MessageView } from "@ui5/webcomponents-react/ssr/components/MessageView";
import { MessageItem } from "@ui5/webcomponents-react/ssr/components/MessageView/MessageItem";
import { MessageViewButton } from "@ui5/webcomponents-react/ssr/components/MessageViewButton";
import { Modals } from "@ui5/webcomponents-react/ssr/components/Modals";
import { NumericSideIndicator } from "@ui5/webcomponents-react/ssr/components/NumericSideIndicator";
import { ObjectPage } from "@ui5/webcomponents-react/ssr/components/ObjectPage";
import { ObjectPageSection } from "@ui5/webcomponents-react/ssr/components/ObjectPageSection";
import { ObjectPageSubSection } from "@ui5/webcomponents-react/ssr/components/ObjectPageSubSection";
import { ObjectStatus } from "@ui5/webcomponents-react/ssr/components/ObjectStatus";
import { OverflowToolbarButton } from "@ui5/webcomponents-react/ssr/components/OverflowToolbarButton";
import { OverflowToolbarToggleButton } from "@ui5/webcomponents-react/ssr/components/OverflowToolbarToggleButton";
import { ResponsiveGridLayout } from "@ui5/webcomponents-react/ssr/components/ResponsiveGridLayout";
import { SelectDialog } from "@ui5/webcomponents-react/ssr/components/SelectDialog";
import { SplitterElement } from "@ui5/webcomponents-react/ssr/components/SplitterElement";
import { SplitterLayout } from "@ui5/webcomponents-react/ssr/components/SplitterLayout";
import { Text } from "@ui5/webcomponents-react/ssr/components/Text";
import { ThemeProvider } from "@ui5/webcomponents-react/ssr/components/ThemeProvider";
import { Toolbar } from "@ui5/webcomponents-react/ssr/components/Toolbar";
import { ToolbarSeparator } from "@ui5/webcomponents-react/ssr/components/ToolbarSeparator";
import { ToolbarSpacer } from "@ui5/webcomponents-react/ssr/components/ToolbarSpacer";
import { VariantManagement } from "@ui5/webcomponents-react/ssr/components/VariantManagement";
import { VariantItem } from "@ui5/webcomponents-react/ssr/components/VariantManagement/VariantItem";
import "@ui5/webcomponents-icons/dist/edit.js";
import {
  Button,
  Input,
  Title,
  StandardListItem,
} from "@ui5/webcomponents-react/ssr/webComponents";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    console.log("Device", isChrome());
    console.log("EventProvider", new EventProvider());
    console.log(
      "MediaRange",
      MediaRange.getCurrentRange(MediaRange.RANGESETS.RANGE_4STEPS)
    );
    console.log("config/Theme", getTheme());
    console.log("config/RTL", getRTL());
    console.log("config/Language", getLanguage());
    attachThemeLoaded(() => console.log("loaded"));
    attachLanguageChange(async () => console.log("language change"));
    // attachBoot(() => console.log('booted'));
    console.log(
      "CustomElementsScope",
      getEffectiveScopingSuffixForTag("ui5-button")
    );
    //
    addCustomCSS("ui5-button", ":host { --myCustomVar: red;}");
  }, []);

  const actionSheetRef = useRef<ResponsivePopoverDomRef>(null);

  const showMessageBox = Modals.useShowMessageBox();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href={"/dynamic-page"}>Go to Dynamic Page</Link>
        <Link href={"/object-page"}>Go to Object Page</Link>
        <Button
          onClick={(e) => {
            actionSheetRef.current?.showAt(e.target);
          }}
          id="btn1"
        >
          Hello World!
        </Button>
        <ActionSheet ref={actionSheetRef} opener={"btn1"}>
          <Button>Hello World!</Button>
        </ActionSheet>

        <AnalyticalCard
          header={
            <AnalyticalCardHeader
              titleText={"Analytical Card Header"}
              value={`100`}
            >
              <NumericSideIndicator number={42} titleText={`1337`} />
            </AnalyticalCardHeader>
          }
        >
          Hello!
        </AnalyticalCard>

        {/*<FilterBar header={<Title>FilterBar</Title>}>*/}
        {/*    <FilterGroupItem label="Input">*/}
        {/*        <Input placeholder="Placeholder" />*/}
        {/*</FilterGroupItem>*/}
        {/*</FilterBar>*/}

        <FlexBox>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </FlexBox>

        {/*<Form>*/}
        {/*  <FormGroup titleText={"My Form Group"}>*/}
        {/*    <FormItem label={"Form Item 1"}>*/}
        {/*      <input type={"checkbox"} />{" "}*/}
        {/*    </FormItem>*/}
        {/*    <FormItem label={"Form Item 2"}>*/}
        {/*      <input type={"checkbox"} />{" "}*/}
        {/*    </FormItem>*/}
        {/*    <FormItem label={"Form Item"}>*/}
        {/*      <input type={"checkbox"} />{" "}*/}
        {/*    </FormItem>*/}
        {/*    <FormItem label={"Form Item"}>*/}
        {/*      <input type={"checkbox"} />{" "}*/}
        {/*    </FormItem>*/}
        {/*  </FormGroup>*/}
        {/*  <FormGroup titleText={"My Form Group 2"}>*/}
        {/*    <FormItem label={"Form Item"}>*/}
        {/*      <input type={"checkbox"} />{" "}*/}
        {/*    </FormItem>*/}
        {/*    <FormItem label={"Form Item"}>*/}
        {/*      <input type={"checkbox"} />{" "}*/}
        {/*    </FormItem>*/}
        {/*    <FormItem label={"Form Item"}>*/}
        {/*      <input type={"checkbox"} />{" "}*/}
        {/*    </FormItem>*/}
        {/*    <FormItem label={"Form Item"}>*/}
        {/*      <input type={"checkbox"} />{" "}*/}
        {/*    </FormItem>*/}
        {/*  </FormGroup>*/}
        {/*</Form>*/}

        <Grid>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </Grid>

        <Loader />

        <Button
          onClick={() => {
            showMessageBox({ children: "Hello from my modal!" });
          }}
        >
          Show Modal
        </Button>

        <MessageBox>Hello Message Box!</MessageBox>

        <MessageView>
          <MessageItem titleText={"Some really bad error"} type={"Error"}>
            Bla bla bla
          </MessageItem>
        </MessageView>

        <MessageViewButton counter={5} type={"Error"} />

        {/*<ObjectPage>*/}
        {/*    <ObjectPageSection id={`1`} titleText={`Section 1`} >*/}
        {/*        <ObjectPageSubSection id={`2`}>*/}
        {/*            <span>Hello</span>*/}
        {/*        </ObjectPageSubSection>*/}
        {/*        </ObjectPageSection>*/}
        {/*</ObjectPage>*/}

        <ObjectStatus state="Success">Object Status</ObjectStatus>

        <TablePlaceholder rows={5} columns={[{ totalWidth: 100 }]} style={{}} />

        <Toolbar>
          <OverflowToolbarButton
            icon="edit"
            tooltip="Text only visible in popover"
          >
            OverflowToolbarButton (only visible in popover)
          </OverflowToolbarButton>
          <OverflowToolbarToggleButton
            icon="edit"
            tooltip="Text only visible in popover"
          >
            OverflowToolbarToggleButton (only visible in popover)
          </OverflowToolbarToggleButton>
          <Button>Hello</Button>
          <ToolbarSpacer />
          <Button>Hello</Button>
          <ToolbarSeparator />
          <Button>Hello</Button>
        </Toolbar>

        <ResponsiveGridLayout>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </ResponsiveGridLayout>

        <SelectDialog>
          <StandardListItem description="LT-100">
            Gaming Laptop
          </StandardListItem>
          <StandardListItem description="LT-201">
            Business Laptop
          </StandardListItem>
        </SelectDialog>

        <SplitterLayout>
          <SplitterElement>
            <span>Splitter 1</span>
          </SplitterElement>
          <SplitterElement>
            <span>Splitter 2</span>
          </SplitterElement>
        </SplitterLayout>

        <Text>Hello World!</Text>

        {/*<VariantManagement>*/}
        <VariantItem>Default VariantItem</VariantItem>
        <VariantItem selected>Selected</VariantItem>
        <VariantItem author="SAP">Author</VariantItem>
        <VariantItem favorite>Favorite</VariantItem>
        <VariantItem isDefault>IsDefault</VariantItem>
        <VariantItem favorite labelReadOnly>
          Favorite & labelReadOnly
        </VariantItem>
        <VariantItem applyAutomatically>ApplyAutomatically</VariantItem>
        <VariantItem readOnly>ReadOnly</VariantItem>
        <VariantItem global>Global</VariantItem>
        <VariantItem global readOnly>
          Global & readOnly
        </VariantItem>
        <VariantItem global>{`Not deletable -> global`}</VariantItem>
        <VariantItem hideDelete>{`Not deletable -> hideDelete`}</VariantItem>
        <VariantItem global>
          {`Deletable -> hideDelete: false, global: true`}
        </VariantItem>
        {/*</VariantManagement>*/}
      </main>
    </div>
  );
}
