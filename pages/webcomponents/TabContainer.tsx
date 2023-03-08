
import { Tab, TabContainer, TabSeparator } from '@ui5/webcomponents-react/ssr';

export default function TabContainerPage() {
  return <TabContainer>
    <Tab text={"tab 1"} />
    <TabSeparator />
    <Tab text={"tab 2"} />
  </TabContainer>
}
