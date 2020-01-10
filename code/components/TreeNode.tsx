import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/TreeNode";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTreeNode: React.SFC = props => {
  return <System.TreeNode {...props}/>;
};

export const TreeNode = withHOC(InnerTreeNode);

TreeNode.defaultProps = {
  width: 150,
  height: 30,
};

addPropertyControls(TreeNode, {
  depth: merge(controls.depth, {}),
  disabled: merge(controls.disabled, {}),
  hasCaret: merge(controls.hasCaret, {defaultValue: true}),
  icon: merge(controls.icon, {defaultValue: "folder-close"}),
  isExpanded: merge(controls.isExpanded, {}),
  isSelected: merge(controls.isSelected, {}),
  label: merge(controls.label, {defaultValue: "Folder 0"}),
  secondaryLabel: merge(controls.secondaryLabel, {}),
  intent: merge(controls.intent, {})
});
