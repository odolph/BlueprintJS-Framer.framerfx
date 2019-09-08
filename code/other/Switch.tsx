import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Switch";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSwitch: React.SFC = props => {
  return <System.Switch {...props} style={style} />;
};

export const Switch = withHOC(InnerSwitch);

Switch.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Switch, {
  innerLabelChecked: merge(controls.innerLabelChecked, {}),
  innerLabel: merge(controls.innerLabel, {}),
  alignIndicator: merge(controls.alignIndicator, {}),
  checked: merge(controls.checked, {}),
  children: merge(controls.children, {}),
  defaultChecked: merge(controls.defaultChecked, {}),
  disabled: merge(controls.disabled, {}),
  inline: merge(controls.inline, {}),
  label: merge(controls.label, {}),
  labelElement: merge(controls.labelElement, {}),
  large: merge(controls.large, {}),
  tagName: merge(controls.tagName, {}),
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
