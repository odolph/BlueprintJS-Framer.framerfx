import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Radio";
import { withHOC } from "../withHOC";
import { useManagedState } from "../utils/useManagedState"
import { LabelPropertyControl } from "../utils/PropertyControls"

const InnerRadio: React.SFC<any> = ({ items, checked, label,  ...props }) => {
  const [currentlyChecked, setChecked] = useManagedState (checked)
  return (
    <System.Radio checked={currentlyChecked} onChange={e => setChecked(e.target["checked"])} {...props}>
      {label}
    </System.Radio>
  )
};

export const Radio = withHOC(InnerRadio);

Radio.defaultProps = {
  width: 150,
  height: 25

};

addPropertyControls(Radio, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  ...LabelPropertyControl
});
