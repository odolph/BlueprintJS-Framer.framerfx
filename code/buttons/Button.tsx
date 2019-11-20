import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Button";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerButton: React.SFC = props => {
  return <System.Button {...props} style={style} />;
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 150,
  height: 50
};

export const ButtonPropertyControls: PropertyControls = {
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {}),
}

addPropertyControls(Button, ButtonPropertyControls)
