import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Blockquote";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBlockquote: React.SFC = props => {
  return <System.Blockquote {...props} style={style} />;
};

export const Blockquote = withHOC(InnerBlockquote);

Blockquote.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Blockquote, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
