import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Breadcrumb";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBreadcrumb: React.SFC = props => {
  return <System.Breadcrumb {...props} style={style} />;
};

export const Breadcrumb = withHOC(InnerBreadcrumb);

Breadcrumb.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Breadcrumb, {
  current: merge(controls.current, {}),
  disabled: merge(controls.disabled, {}),
  icon: merge(controls.icon, {}),
  text: merge(controls.text, {}),
  intent: merge(controls.intent, {}),
  className: merge(controls.className, {}),
  href: merge(controls.href, {}),
  target: merge(controls.target, {})
});
