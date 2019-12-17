import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Callout";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCallout: React.SFC = props => {
  return <System.Callout {...props} style={style} />;
};

export const Callout = withHOC(InnerCallout);

Callout.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Callout, {
  icon: merge(controls.icon, {}),
  intent: merge(controls.intent, {}),
  title: merge(controls.title, {}),
});
