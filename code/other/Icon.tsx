import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Icon";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerIcon: React.SFC = props => {
  return <System.Icon {...props} style={style} />;
};

export const Icon = withHOC(InnerIcon);

Icon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Icon, {
  children: merge(controls.children, {}),
  color: merge(controls.color, {}),
  htmlTitle: merge(controls.htmlTitle, {}),
  icon: merge(controls.icon, {}),
  iconSize: merge(controls.iconSize, {}),
  tagName: merge(controls.tagName, {}),
  title: merge(controls.title, {}),
  intent: merge(controls.intent, {}),
  className: merge(controls.className, {})
});
