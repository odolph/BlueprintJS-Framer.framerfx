import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Spinner";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSpinner: React.SFC = props => {
  return <System.Spinner {...props} style={style} />;
};

export const Spinner = withHOC(InnerSpinner);

Spinner.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Spinner, {
  size: merge(controls.size, {}),
  tagName: merge(controls.tagName, {}),
  value: merge(controls.value, {}),
  className: merge(controls.className, {}),
  intent: merge(controls.intent, {})
});
