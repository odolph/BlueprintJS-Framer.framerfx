import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/NonIdealState";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNonIdealState: React.SFC = props => {
  return <System.NonIdealState {...props} style={style} />;
};

export const NonIdealState = withHOC(InnerNonIdealState);

NonIdealState.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NonIdealState, {
  children: merge(controls.children, {}),
  description: merge(controls.description, {}),
  icon: merge(controls.icon, {}),
  title: merge(controls.title, {}),
  className: merge(controls.className, {})
});
