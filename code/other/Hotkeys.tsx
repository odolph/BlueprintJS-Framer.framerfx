import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Hotkeys";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerHotkeys: React.SFC = props => {
  return <System.Hotkeys {...props} style={style} />;
};

export const Hotkeys = withHOC(InnerHotkeys);

Hotkeys.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Hotkeys, {
  tabIndex: merge(controls.tabIndex, {}),
  className: merge(controls.className, {})
});
