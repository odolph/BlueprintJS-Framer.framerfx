import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/MenuItem";
import { withHOC } from "../withHOC";
import { Menu } from "@blueprintjs/core";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMenuItem: React.SFC = props => {
  return <System.MenuItem {...props} />;
};

export const MenuItem = withHOC(InnerMenuItem);

MenuItem.defaultProps = {
  width: 150,
  height: 30
};

addPropertyControls(MenuItem, {
  text: merge(controls.text, { defaultValue: "Settings" }),
  active: merge(controls.active, { defaultValue: true }),
  disabled: merge(controls.disabled, {}),
  label: merge(controls.label, {}),
  multiline: merge(controls.multiline, {}),
  icon: merge(controls.icon, { defaultValue: "cog" }),
  intent: merge(controls.intent, {})
});
