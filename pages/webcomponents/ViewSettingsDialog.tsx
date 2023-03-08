import {
  FilterItem,
  FilterItemOption,
  SortItem,
  ViewSettingsDialog,
} from "@ui5/webcomponents-react/ssr";
import { useEffect, useRef } from "react";

export default function ViewSettingsDialogPage() {
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current.show();
    }, 500);
  }, []);
  return (
    <ViewSettingsDialog
      ref={ref}
      filterItems={
        <>
          <FilterItem
            text="Position"
            values={
              <>
                <FilterItemOption text="CEO" />
                <FilterItemOption text="CTO" />
                <FilterItemOption text="CIO" />
              </>
            }
          />
          <FilterItem
            text="Department"
            values={
              <>
                <FilterItemOption text="Legal" />
                <FilterItemOption text="Finance" />
                <FilterItemOption text="Development" />
              </>
            }
          />
        </>
      }
      sortItems={
        <>
          <SortItem text="Name" />
          <SortItem text="Position" />
          <SortItem text="Company" />
          <SortItem text="Department" />
        </>
      }
    />
  );
}
