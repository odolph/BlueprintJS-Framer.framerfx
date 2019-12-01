import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Toast";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerToast: React.SFC = props => {
  return <System.Toast {...props} style={style} />;
};

export const Toast = withHOC(InnerToast);

Toast.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Toast, {
  icon: merge(controls.icon, {}),
  message: merge(controls.message, {}),
  timeout: merge(controls.timeout, {}),
  className: merge(controls.className, {}),
  intent: merge(controls.intent, {})
});
