import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Radio";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerRadio: React.SFC = props => {
  return <System.Radio {...props} style={style} />;
};

export const Radio = withHOC(InnerRadio);

Radio.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Radio, {
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
