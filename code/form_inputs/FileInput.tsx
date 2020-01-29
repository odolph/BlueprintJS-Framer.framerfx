import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/FileInput";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFileInput: React.SFC = props => {
  return <System.FileInput {...props} style={style} />;
};

export const FileInput = withHOC(InnerFileInput);

FileInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FileInput, {
  disabled: merge(controls.disabled, {}),
  fill: merge(controls.fill, {}),
  hasSelection: merge(controls.hasSelection, {}),
  large: merge(controls.large, {}),
  text: merge(controls.text, {defaultValue: "Upload File..."}),
  buttonText: merge(controls.buttonText, {})
});
