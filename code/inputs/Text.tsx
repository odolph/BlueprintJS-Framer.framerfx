import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Text";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerText: React.SFC = props => {
  return <System.Text {...props} style={style} />;
};

export const Text = withHOC(InnerText);

Text.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Text, {
  ellipsize: merge(controls.ellipsize, {}),
  tagName: merge(controls.tagName, {}),
  className: merge(controls.className, {})
});
