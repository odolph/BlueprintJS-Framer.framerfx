import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Tooltip";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTooltip: React.SFC = props => {
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
  captureDismiss: merge(controls.captureDismiss, {}),
  defaultIsOpen: merge(controls.defaultIsOpen, {}),
  disabled: merge(controls.disabled, {}),
  inheritDarkTheme: merge(controls.inheritDarkTheme, {}),
  isOpen: merge(controls.isOpen, {}),
  openOnTargetFocus: merge(controls.openOnTargetFocus, {}),
  popoverClassName: merge(controls.popoverClassName, {}),
  position: merge(controls.position, {}),
  targetClassName: merge(controls.targetClassName, {}),
  targetTagName: merge(controls.targetTagName, {}),
  usePortal: merge(controls.usePortal, {}),
  wrapperTagName: merge(controls.wrapperTagName, {}),
  autoFocus: merge(controls.autoFocus, {}),
  canEscapeKeyClose: merge(controls.canEscapeKeyClose, {}),
  enforceFocus: merge(controls.enforceFocus, {}),
  lazy: merge(controls.lazy, {}),
  portalClassName: merge(controls.portalClassName, {}),
  className: merge(controls.className, {}),
  intent: merge(controls.intent, {})
});
