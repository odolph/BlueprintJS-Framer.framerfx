import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/AbstractComponent";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAbstractComponent: React.SFC = props => {
  return <System.AbstractComponent {...props} style={style} />;
};

export const AbstractComponent = withHOC(InnerAbstractComponent);

AbstractComponent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(AbstractComponent, {});
