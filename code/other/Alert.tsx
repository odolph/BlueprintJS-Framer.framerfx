import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Alert";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAlert: React.SFC = props => {
  return <System.Alert {...props} style={style} />;
};

export const Alert = withHOC(InnerAlert);

Alert.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Alert, {
  canEscapeKeyCancel: merge(controls.canEscapeKeyCancel, {}),
  canOutsideClickCancel: merge(controls.canOutsideClickCancel, {}),
  cancelButtonText: merge(controls.cancelButtonText, {}),
  confirmButtonText: merge(controls.confirmButtonText, {}),
  icon: merge(controls.icon, {}),
  intent: merge(controls.intent, {}),
  isOpen: merge(controls.isOpen, {}),
  transitionDuration: merge(controls.transitionDuration, {}),
  className: merge(controls.className, {})
});
