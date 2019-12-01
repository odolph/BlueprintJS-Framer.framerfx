import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/AnchorButton";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAnchorButton: React.SFC = props => {
  return <System.AnchorButton {...props} style={style} />;
};

export const AnchorButton = withHOC(InnerAnchorButton);

AnchorButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(AnchorButton, {
  placeholder: merge(controls.placeholder, {})
});
