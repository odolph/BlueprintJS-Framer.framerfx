import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/H3";
import { withHOC } from "../withHOC";
import {
  TextPropertyControl,
  ColorPropertyControl
} from "../utils/PropertyControls";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH3: React.SFC<any> = ({
  text,
  ["children"]: _,
  willChangeTransform: __,
  ...props
}) => {
  return <System.H3 {...props}>{text}</System.H3>;
};

export const H3 = withHOC(InnerH3);

H3.defaultProps = {
  width: 360,
  height: 25
};

addPropertyControls(H3, {
  ...TextPropertyControl,
  ...ColorPropertyControl
});
