import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Tab";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTab: React.SFC = props => {
  return <System.Tab {...props} style={style} />;
};

export const Tab = withHOC(InnerTab);

Tab.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tab, {
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  id: merge(controls.id, {}),
  panelClassName: merge(controls.panelClassName, {}),
  title: merge(controls.title, {}),
  className: merge(controls.className, {})
});
