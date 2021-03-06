import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/H2";
import { withHOC } from "../withHOC";
import {
  TextPropertyControl,
  ColorPropertyControl
} from "../utils/PropertyControls";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH2: React.SFC = ({
  text,
  ["children"]: _,
  willChangeTransform: __,
  ...props
}) => {
  return <System.H2 {...props}>{text}</System.H2>;
};

export const H2 = withHOC(InnerH2);

H2.defaultProps = {
  width: 360,
  height: 25
};

addPropertyControls(H2, {
  ...TextPropertyControl,
  ...ColorPropertyControl
});
