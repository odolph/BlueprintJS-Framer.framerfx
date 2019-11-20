import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Radio";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerRadio: React.SFC = props => {
  return <System.Radio {...props} style={style} />;
};

export const Radio = withHOC(InnerRadio);

Radio.defaultProps = {
  width: 150,
  height: 25

};

addPropertyControls(Radio, {
  alignIndicator: merge(controls.alignIndicator, {}),
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  inline: merge(controls.inline, {}),
  label: merge(controls.label, {defaultValue: "Radio"}),
});
