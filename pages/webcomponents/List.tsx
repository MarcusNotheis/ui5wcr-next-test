
import { CustomListItem, GroupHeaderListItem, List, StandardListItem } from '@ui5/webcomponents-react/ssr';

export default function ListPage() {
  return <List>
    <GroupHeaderListItem>Group Header</GroupHeaderListItem>
    <StandardListItem>Standard</StandardListItem>
    <CustomListItem>Custom!</CustomListItem>
  </List>
}
