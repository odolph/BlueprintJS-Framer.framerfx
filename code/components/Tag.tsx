import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Tag";
import { withHOC } from "../withHOC";
import { setHotkeysDialogProps } from "@blueprintjs/core";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTag: React.SFC<any> = ({
  text,
  ["children"]: _,
  willChangeTransform: __,
  ...props
}) => {
  return <System.Tag {...props}>{text}</System.Tag>;
};

export const Tag = withHOC(InnerTag);

Tag.defaultProps = {
  width: 120,
  height: 32,
};

addPropertyControls(Tag, {
  active: merge(controls.active, {}),
  fill: merge(controls.fill, {}),
  icon: merge(controls.icon, {defaultValue: "blank"}),
  interactive: merge(controls.interactive, {}),
  large: merge(controls.large, {defaultValue: true}),
  minimal: merge(controls.minimal, {}),
  multiline: merge(controls.multiline, {}),
  rightIcon: merge(controls.rightIcon, {defaultValue: "cross"}),
  round: merge(controls.round, {}),
  intent: merge(controls.intent, {}),
  text: {
    title: "Title",
    defaultValue: "Default",
    type: ControlType.String
}
});
