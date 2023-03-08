
import { ProductSwitch, ProductSwitchItem } from '@ui5/webcomponents-react/ssr';

export default function ProductSwitchPage() {
  return <ProductSwitch>
    <ProductSwitchItem
        icon="wrench"
        onClick={function ka(){}}
        subtitleText="Customizable"
        target="_blank"
        targetSrc="https://sap.github.io/ui5-webcomponents-react/"
        titleText="ProductSwitchItem"
    />
    <ProductSwitchItem
        icon="home"
        subtitleText="Central Home"
        titleText="Home"
    />
    <ProductSwitchItem
        icon="business-objects-experience"
        subtitleText="Analytical Cloud"
        titleText="Analytical Cloud"
    />
    <ProductSwitchItem
        icon="contacts"
        subtitleText="Ariba"
        titleText="Catalog"
    />
    <ProductSwitchItem
        icon="flight"
        subtitleText="Concur"
        titleText="Travel & Expense"
    />
  </ProductSwitch>
}
