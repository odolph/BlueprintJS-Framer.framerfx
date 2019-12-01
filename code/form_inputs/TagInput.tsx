import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/TagInput";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTagInput: React.SFC = props => {
  return <System.TagInput {...props} style={style} />;
};

export const TagInput = withHOC(InnerTagInput);

TagInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TagInput, {
  addOnBlur: merge(controls.addOnBlur, {}),
  addOnPaste: merge(controls.addOnPaste, {}),
  disabled: merge(controls.disabled, {}),
  fill: merge(controls.fill, {}),
  inputValue: merge(controls.inputValue, {}),
  large: merge(controls.large, {}),
  leftIcon: merge(controls.leftIcon, {}),
  placeholder: merge(controls.placeholder, {}),
  separator: merge(controls.separator, {}),
  intent: merge(controls.intent, {}),
  className: merge(controls.className, {})
});
