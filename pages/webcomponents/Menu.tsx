import { Menu, MenuItem } from "@ui5/webcomponents-react/ssr";

export default function MenuPage() {
  return (
      <>
        <span id={"opener"}>Open here</span>
        <Menu open opener="opener">
          <MenuItem icon="add-document" text="New File" />
          <MenuItem disabled icon="add-folder" text="New Folder" />
          <MenuItem icon="open-folder" startsSection text="Open" />
          <MenuItem text="Close" />
          <MenuItem icon="action-settings" startsSection text="Preferences" />
          <MenuItem icon="journey-arrive" text="Exit" />
        </Menu>
      </>

  );
}
