import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/CollapsibleList";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCollapsibleList: React.SFC = props => {
  return <System.CollapsibleList {...props} style={style} />;
};

export const CollapsibleList = withHOC(InnerCollapsibleList);

CollapsibleList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CollapsibleList, {
  collapseFrom: merge(controls.collapseFrom, {}),
  visibleItemClassName: merge(controls.visibleItemClassName, {}),
  visibleItemCount: merge(controls.visibleItemCount, {}),
  className: merge(controls.className, {})
});
