import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Overlay";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerOverlay: React.SFC = props => {
  return <System.Overlay {...props} style={style} />;
};

export const Overlay = withHOC(InnerOverlay);

Overlay.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Overlay, {
  isOpen: merge(controls.isOpen, {}),
  transitionName: merge(controls.transitionName, {}),
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
