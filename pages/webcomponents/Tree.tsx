import {
  Button,
  Icon,
  Tree,
  TreeItem,
  TreeItemCustom,
} from "@ui5/webcomponents-react/ssr";

export default function TreePage() {
  return (
    <Tree>
      <TreeItem expanded icon="paste" selected text="Tree 1">
        <TreeItem expanded selected text="Tree 1.1">
          <TreeItem text="Tree 1.1.1" />
          <TreeItem text="Tree 1.1.2" />
        </TreeItem>
      </TreeItem>
      <TreeItem icon="copy" text="Tree 2">
        <TreeItem text="Tree 2.1">
          <TreeItem text="Tree 2.1.1" />
          <TreeItem text="Tree 2.1.2">
            <TreeItem text="Tree 2.1.2.1" />
            <TreeItem text="Tree 2.1.2.2" />
            <TreeItem text="Tree 2.1.2.3" />
            <TreeItem text="Tree 2.1.2.5" />
          </TreeItem>
        </TreeItem>
        <TreeItem text="Tree 2.2" />
      </TreeItem>
      <TreeItem text="Tree 3 (no icon)" />
      <TreeItemCustom
        content={
          <div style={{ alignItems: "center", display: "flex" }}>
            <Icon
              name="general-leave-request"
              style={{ marginInlineEnd: "2rem" }}
            />
            <Button>Btn</Button>
            <Icon
              name="general-leave-request"
              style={{ marginInlineStart: "2rem" }}
            />
          </div>
        }
      />
    </Tree>
  );
}
