import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Drawer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDrawer: React.SFC = props => {
  return <System.Drawer {...props} style={style} />;
};

export const Drawer = withHOC(InnerDrawer);

Drawer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Drawer, {
  icon: merge(controls.icon, {}),
  isCloseButtonShown: merge(controls.isCloseButtonShown, {}),
  isOpen: merge(controls.isOpen, {}),
  position: merge(controls.position, {}),
  size: merge(controls.size, {}),
  title: merge(controls.title, {}),
  transitionName: merge(controls.transitionName, {}),
  vertical: merge(controls.vertical, {}),
  autoFocus: merge(controls.autoFocus, {}),
  canEscapeKeyClose: merge(controls.canEscapeKeyClose, {}),
  enforceFocus: merge(controls.enforceFocus, {}),
  lazy: merge(controls.lazy, {}),
  transitionDuration: merge(controls.transitionDuration, {}),
  usePortal: merge(controls.usePortal, {}),
  portalClassName: merge(controls.portalClassName, {}),
  backdropClassName: merge(controls.backdropClassName, {}),
  canOutsideClickClose: merge(controls.canOutsideClickClose, {}),
  hasBackdrop: merge(controls.hasBackdrop, {}),
  className: merge(controls.className, {})
});
