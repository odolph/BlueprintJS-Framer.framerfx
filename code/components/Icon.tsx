import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Icon";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerIcon: React.SFC = props => {
  return <System.Icon {...props} style={style} />;
};

export const Icon = withHOC(InnerIcon);

Icon.defaultProps = {
  width: 50,
  height: 50,
  color: "white"
};

addPropertyControls(Icon, {
  color: { type: ControlType.Color, defaultValue: "#ffffff", title: "Color" },
  icon: merge(controls.icon, {}),
  iconSize: merge(controls.iconSize, { defaultValue: 50 })
});
