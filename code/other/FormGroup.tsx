import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/FormGroup";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFormGroup: React.SFC = props => {
  return <System.FormGroup {...props} style={style} />;
};

export const FormGroup = withHOC(InnerFormGroup);

FormGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormGroup, {
  contentClassName: merge(controls.contentClassName, {}),
  disabled: merge(controls.disabled, {}),
  helperText: merge(controls.helperText, {}),
  inline: merge(controls.inline, {}),
  label: merge(controls.label, {}),
  labelFor: merge(controls.labelFor, {}),
  labelInfo: merge(controls.labelInfo, {}),
  intent: merge(controls.intent, {}),
  className: merge(controls.className, {})
});
