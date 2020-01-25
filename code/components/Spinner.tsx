import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Spinner";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
};

const InnerSpinner: React.SFC = props => {
  return <System.Spinner {...props} style={style} />;
};

export const Spinner = withHOC(InnerSpinner);

Spinner.defaultProps = {
  width: 50,
  height: 50,
};

addPropertyControls(Spinner, {
  intent: merge(controls.intent, {}),
  size: merge(controls.size, {defaultValue: 24}),
  value: merge(controls.value, {defaultValue: 0.5, step: 0.1, min: 0, max: 1}),
});
