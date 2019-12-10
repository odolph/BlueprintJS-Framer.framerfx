import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Spinner";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSpinner: React.SFC = props => {
  return <System.Spinner {...props} style={style} />;
};

export const Spinner = withHOC(InnerSpinner);

Spinner.defaultProps = {
  width: 50,
  height: 50,
  value: .5,
};

addPropertyControls(Spinner, {
  intent: merge(controls.intent, {}),
  size: merge(controls.size, {}),
  value: merge(controls.value, {step: 0.1}),
});
