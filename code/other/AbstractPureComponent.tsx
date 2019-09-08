import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/AbstractPureComponent";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAbstractPureComponent: React.SFC = props => {
  return <System.AbstractPureComponent {...props} style={style} />;
};

export const AbstractPureComponent = withHOC(InnerAbstractPureComponent);

AbstractPureComponent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(AbstractPureComponent, {});
