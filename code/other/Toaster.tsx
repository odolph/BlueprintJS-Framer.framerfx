import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Toaster";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerToaster: React.SFC = props => {
  return <System.Toaster {...props} style={style} />;
};

export const Toaster = withHOC(InnerToaster);

Toaster.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Toaster, {
  autoFocus: merge(controls.autoFocus, {}),
  canEscapeKeyClear: merge(controls.canEscapeKeyClear, {}),
  usePortal: merge(controls.usePortal, {}),
  position: merge(controls.position, {}),
  className: merge(controls.className, {})
});
