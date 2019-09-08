import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/NavbarGroup";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNavbarGroup: React.SFC = props => {
  return <System.NavbarGroup {...props} style={style} />;
};

export const NavbarGroup = withHOC(InnerNavbarGroup);

NavbarGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NavbarGroup, {
  align: merge(controls.align, {}),
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
