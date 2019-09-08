import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Collapse";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCollapse: React.SFC = props => {
  return <System.Collapse {...props} style={style} />;
};

export const Collapse = withHOC(InnerCollapse);

Collapse.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Collapse, {
  component: merge(controls.component, {}),
  isOpen: merge(controls.isOpen, {}),
  keepChildrenMounted: merge(controls.keepChildrenMounted, {}),
  transitionDuration: merge(controls.transitionDuration, {}),
  className: merge(controls.className, {})
});
