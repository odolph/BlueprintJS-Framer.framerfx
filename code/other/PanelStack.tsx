import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/PanelStack";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPanelStack: React.SFC = props => {
  return <System.PanelStack {...props} style={style} />;
};

export const PanelStack = withHOC(InnerPanelStack);

PanelStack.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(PanelStack, {
  showPanelHeader: merge(controls.showPanelHeader, {}),
  className: merge(controls.className, {})
});
