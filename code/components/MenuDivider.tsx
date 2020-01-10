import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/MenuDivider";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMenuDivider: React.SFC = props => {
  return <System.MenuDivider {...props} style={style}/>;
};

export const MenuDivider = withHOC(InnerMenuDivider);

MenuDivider.defaultProps = {
  width: 150,
  height: 11
};

addPropertyControls(MenuDivider, {
});
