import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/OverflowList";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerOverflowList: React.SFC = props => {
  return <System.OverflowList {...props} style={style} />;
};

export const OverflowList = withHOC(InnerOverflowList);

OverflowList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(OverflowList, {
  collapseFrom: merge(controls.collapseFrom, {}),
  minVisibleItems: merge(controls.minVisibleItems, {}),
  observeParents: merge(controls.observeParents, {}),
  tagName: merge(controls.tagName, {}),
  className: merge(controls.className, {})
});
