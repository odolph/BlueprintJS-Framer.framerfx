import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Tooltip";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTooltip: React.SFC<any> = props => {
  return <System.Tooltip {...props} style={style} />;
};

export const Tooltip = withHOC(InnerTooltip);

Tooltip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tooltip, {
  content: merge(controls.content, {}),
  hoverCloseDelay: merge(controls.hoverCloseDelay, {}),
  hoverOpenDelay: merge(controls.hoverOpenDelay, {}),
  interactionKind: merge(controls.interactionKind, {}),
  transitionDuration: merge(controls.transitionDuration, {}),
  boundary: merge(controls.boundary, {}),
  defaultIsOpen: merge(controls.defaultIsOpen, {}),
  disabled: merge(controls.disabled, {}),
  intent: merge(controls.intent, {})
});
