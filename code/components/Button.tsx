import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Button";
import { withHOC } from "../withHOC";
import { iconPropertyControl } from "../utils/iconPropertyControl";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerButton = props => {
  return <System.Button {...props} style={style} />;
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Button, {
  intent: {
    title: "Intent",
    options: ["none", "primary", "success", "warning", "danger"],
    optionTitles: ["None", "Primary", "Success", "Warning", "Danger"],
    defaultValue: "none",
    type: ControlType.Enum
  },
  disabled: merge(controls.disabled, {}),
  icon: iconPropertyControl("Icon"),
  rightIcon: iconPropertyControl("Right Icon"),
  text: {
    title: "Title",
    defaultValue: "Button",
    type: ControlType.String
  }
});
