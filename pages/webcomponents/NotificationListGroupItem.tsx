import {
  Avatar,
  NotificationAction,
  NotificationListGroupItem,
  NotificationListItem,
} from "@ui5/webcomponents-react/ssr";

export default function NotificationListGroupItemPage() {
  return (
    <NotificationListGroupItem
      actions={
        <>
          <NotificationAction icon="accept" text="Accept all" />
          <NotificationAction icon="message-error" text="Reject all" />
        </>
      }
      showClose
      showCounter
      titleText="Orders"
    >
      <NotificationListItem
        actions={
          <>
            <NotificationAction icon="accept" text="Accept" />
            <NotificationAction icon="message-error" text="Reject" />
          </>
        }
        avatar={
          <Avatar size="XS">
            <img src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png" />
          </Avatar>
        }
        footnotes={
          <>
            <span>Monique Legrand</span>
            <span>2 Days</span>
          </>
        }
        priority="Medium"
        titleText="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
      >
        And with a very long description and long labels of the action buttons -
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
        nec elementum lectus turpis at nunc.
      </NotificationListItem>
      <NotificationListItem
        actions={
          <>
            <NotificationAction icon="accept" text="Accept" />
            <NotificationAction icon="message-error" text="Reject" />
          </>
        }
        avatar={
          <Avatar size="XS">
            <img src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png" />
          </Avatar>
        }
        footnotes={
          <>
            <span>Alain Devalier</span>
            <span>2 Days</span>
          </>
        }
        priority="High"
        showClose
        titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
      >
        And with a very long description and long labels of the action buttons -
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
        nec elementum lectus turpis at nunc.
      </NotificationListItem>
    </NotificationListGroupItem>
  );
}
