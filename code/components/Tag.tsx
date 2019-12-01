import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Tag";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTag: React.SFC = props => {
  return <System.Tag {...props} style={style} />;
};

export const Tag = withHOC(InnerTag);

Tag.defaultProps = {
  width: 150,
  height: 32,
};

addPropertyControls(Tag, {
  active: merge(controls.active, {}),
  fill: merge(controls.fill, {}),
  icon: merge(controls.icon, {}),
  interactive: merge(controls.interactive, {}),
  large: merge(controls.large, {}),
  minimal: merge(controls.minimal, {}),
  multiline: merge(controls.multiline, {}),
  rightIcon: merge(controls.rightIcon, {}),
  round: merge(controls.round, {}),
  className: merge(controls.className, {}),
  intent: merge(controls.intent, {}),
  placeholder: merge(controls.placeholder, {})
});
