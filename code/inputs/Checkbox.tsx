import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Checkbox";
import { withHOC } from "../withHOC";
import { Label } from "../content/Label";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCheckbox: React.SFC = props => {
  return (
    <System.Checkbox {...props} style={style}>
      {Label}
    </System.Checkbox>
  );
};

export const Checkbox = withHOC(InnerCheckbox);

Checkbox.defaultProps = {
  width: 150,
  height: 25
};

addPropertyControls(Checkbox, {
  defaultIndeterminate: merge(controls.defaultIndeterminate, {}),
  indeterminate: merge(controls.indeterminate, {}),
  alignIndicator: merge(controls.alignIndicator, {}),
  checked: merge(controls.checked, {}),
  children: merge(controls.children, {}),
  defaultChecked: merge(controls.defaultChecked, {}),
  disabled: merge(controls.disabled, {}),
  inline: merge(controls.inline, {}),
  label: merge(controls.label, {}),
  labelElement: merge(controls.labelElement, {}),
  large: merge(controls.large, {}),
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
