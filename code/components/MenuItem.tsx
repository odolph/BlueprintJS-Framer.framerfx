import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/MenuItem";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMenuItem: React.SFC = props => {
  return <System.MenuItem {...props} style={style} />;
};

export const MenuItem = withHOC(InnerMenuItem);

MenuItem.defaultProps = {
  width: 300,
  height: 50
};

addPropertyControls(MenuItem, {
  text: merge(controls.text, {}),
  active: merge(controls.active, {defaultValue: true}),
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  label: merge(controls.label, {}),
  labelClassName: merge(controls.labelClassName, {}),
  labelElement: merge(controls.labelElement, {}),
  multiline: merge(controls.multiline, {}),
  shouldDismissPopover: merge(controls.shouldDismissPopover, {}),
  tagName: merge(controls.tagName, {}),
  textClassName: merge(controls.textClassName, {}),
  icon: merge(controls.icon, {}),
  intent: merge(controls.intent, {}),
  placeholder: merge(controls.placeholder, {})
});
