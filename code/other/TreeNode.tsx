import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/TreeNode";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTreeNode: React.SFC = props => {
  return <System.TreeNode {...props} style={style} />;
};

export const TreeNode = withHOC(InnerTreeNode);

TreeNode.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TreeNode, {
  children: merge(controls.children, {}),
  depth: merge(controls.depth, {}),
  key: merge(controls.key, {}),
  disabled: merge(controls.disabled, {}),
  hasCaret: merge(controls.hasCaret, {}),
  icon: merge(controls.icon, {}),
  id: merge(controls.id, {}),
  isExpanded: merge(controls.isExpanded, {}),
  isSelected: merge(controls.isSelected, {}),
  label: merge(controls.label, {}),
  secondaryLabel: merge(controls.secondaryLabel, {}),
  className: merge(controls.className, {})
});
