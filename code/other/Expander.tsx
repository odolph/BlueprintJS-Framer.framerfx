import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Expander";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerExpander: React.SFC = props => {
  return <System.Expander {...props} style={style} />;
};

export const Expander = withHOC(InnerExpander);

Expander.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Expander, {});