import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Popover";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPopover: React.SFC = props => {
  return <System.Popover {...props} style={style} />;
};

export const Popover = withHOC(InnerPopover);

Popover.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Popover, {
  content: merge(controls.content, {}),
  fill: merge(controls.fill, {}),
  interactionKind: merge(controls.interactionKind, {}),
  hasBackdrop: merge(controls.hasBackdrop, {}),
  minimal: merge(controls.minimal, {}),
  target: merge(controls.target, {}),
  boundary: merge(controls.boundary, {}),
  captureDismiss: merge(controls.captureDismiss, {}),
  defaultIsOpen: merge(controls.defaultIsOpen, {}),
  disabled: merge(controls.disabled, {}),
  hoverCloseDelay: merge(controls.hoverCloseDelay, {}),
  hoverOpenDelay: merge(controls.hoverOpenDelay, {}),
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
  transitionDuration: merge(controls.transitionDuration, {}),
  portalClassName: merge(controls.portalClassName, {}),
  className: merge(controls.className, {})
});
