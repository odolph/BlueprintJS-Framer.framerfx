import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/RadioGroup";
import { withHOC } from "../withHOC";
import { useManagedState } from "../utils/useManagedState"
import { LabelPropertyControl } from "../utils/PropertyControls";

const InnerRadioGroup: React.SFC<any> = ({ checked, label, items, ...props }) => {
  const [currentlyChecked, setChecked] = useManagedState (checked)
  return (
    <System.RadioGroup {...props} value={currentlyChecked} onChange={e => setChecked(e.target["checked"])}>
      {items.map(label => {
        return (
          <System.Radio key={label} value={currentlyChecked} onChange={e => setChecked(e.target["checked"])}>
            {label}
          </System.Radio>
        )
      })}
    </System.RadioGroup>
  )
}
export const RadioGroup = withHOC(InnerRadioGroup);

RadioGroup.defaultProps = {
  width: 150,
  height: 110,
};

addPropertyControls(RadioGroup, {
  items: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["First", "Second", "Third"],
  },
  disabled: merge(controls.disabled, {}),
  inline: merge(controls.inline, {}),
  ...LabelPropertyControl,
});
