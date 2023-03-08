import {
  FilterBar,
  FilterGroupItem,
  Input,
  Page,
  VariantItem,
  VariantManagement,
} from "@ui5/webcomponents-react/ssr";
import React from "react";

export default function FilterBarPage() {
  return (
    <Page style={{ height: "100vh", width: "100vw" }}>
      <FilterBar
        header={
          <VariantManagement>
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
            <VariantItem
              hideDelete
            >{`Not deletable -> hideDelete`}</VariantItem>
            <VariantItem global>
              {`Deletable -> hideDelete: false, global: true`}
            </VariantItem>
          </VariantManagement>
        }
        search={<Input placeholder={"Search"} />}
      >
        {/*<FilterGroupItem label="StepInput" required>*/}
        {/*<StepInput required />*/}
        {/*</FilterGroupItem>*/}
        <FilterGroupItem label="RatingIndicator">
          {/*<RatingIndicator />*/}
        </FilterGroupItem>
        {/*<FilterGroupItem label="MultiInput" active>*/}
        {/*<MultiInput*/}
        {/*  tokens={*/}
        {/*    <>*/}
        {/*      <Token text="Argentina" selected />*/}
        {/*      <Token text="Bulgaria" />*/}
        {/*      <Token text="England" />*/}
        {/*      <Token text="Finland" />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*</FilterGroupItem>*/}
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    </Page>
  );
}
