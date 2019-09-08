import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/TextArea";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTextArea: React.SFC = props => {
  return <System.TextArea {...props} style={style} />;
};

export const TextArea = withHOC(InnerTextArea);

TextArea.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TextArea, {
  fill: merge(controls.fill, {}),
  large: merge(controls.large, {}),
  small: merge(controls.small, {}),
  growVertically: merge(controls.growVertically, {}),
  intent: merge(controls.intent, {}),
  className: merge(controls.className, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
