import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/ResizeSensor";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerResizeSensor: React.SFC = props => {
  return <System.ResizeSensor {...props} style={style} />;
};

export const ResizeSensor = withHOC(InnerResizeSensor);

ResizeSensor.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ResizeSensor, {
  observeParents: merge(controls.observeParents, {})
});
