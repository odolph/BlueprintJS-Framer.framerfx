import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Tree";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTree: React.SFC = props => {
  return <System.Tree {...props} style={style} />;
};

export const Tree = withHOC(InnerTree);

Tree.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tree, {
  className: merge(controls.className, {})
});
