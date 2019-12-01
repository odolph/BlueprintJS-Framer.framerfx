import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/ProgressBar";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerProgressBar: React.SFC = props => {
  return <System.ProgressBar {...props} style={style} />;
};

export const ProgressBar = withHOC(InnerProgressBar);

ProgressBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ProgressBar, {
  animate: merge(controls.animate, {}),
  stripes: merge(controls.stripes, {}),
  value: merge(controls.value, {}),
  className: merge(controls.className, {}),
  intent: merge(controls.intent, {})
});
