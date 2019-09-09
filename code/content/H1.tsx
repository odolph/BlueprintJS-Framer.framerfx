import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/H1";
import { withHOC } from "../withHOC";
import {
  TextPropertyControl,
  ColorPropertyControl
} from "../utils/PropertyControls";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH1: React.SFC<any> = ({
  text,
  ["children"]: _,
  willChangeTransform: __,
  ...props
}) => {
  return <System.H1 {...props}>{text}</System.H1>;
};

export const H1 = withHOC(InnerH1);

H1.defaultProps = {
  width: 360,
  height: 200
};

addPropertyControls(H1, {
  ...TextPropertyControl,
  ...ColorPropertyControl
});
