import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react/ssr";

export default function SideNavigationPage() {
  return (
    <SideNavigation
      fixedItems={
        <>
          <SideNavigationItem icon="chain-link" text="Useful Links" />
          <SideNavigationItem icon="history" text="History" />
        </>
      }
    >
      <SideNavigationItem icon="home" text="Home" />
      <SideNavigationItem expanded icon="group" text="People">
        <SideNavigationSubItem text="From My Team" />
        <SideNavigationSubItem text="From Other Teams" />
      </SideNavigationItem>
      <SideNavigationItem icon="locate-me" selected text="Locations" />
      <SideNavigationItem icon="calendar" text="Events">
        <SideNavigationSubItem text="Local" />
        <SideNavigationSubItem text="Others" />
      </SideNavigationItem>
    </SideNavigation>
  );
}
