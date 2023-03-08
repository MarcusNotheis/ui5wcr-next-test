import { Timeline, TimelineItem } from "@ui5/webcomponents-react/ssr";

export default function TimelinePage() {
  return (
    <Timeline>
      <TimelineItem
        icon="phone"
        name="John Smith "
        subtitleText="2019/01/01"
        titleText="Schedule Call"
      />
      <TimelineItem
        icon="calendar"
        subtitleText="2019/01/02"
        titleText="Weekly Sync - CP Design"
      >
        <div>MR SOF02 2.43</div>
      </TimelineItem>
    </Timeline>
  );
}
