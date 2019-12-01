import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/H6";
import { withHOC } from "../withHOC";
import {
  TextPropertyControl,
  ColorPropertyControl
} from "../utils/PropertyControls";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH6: React.SFC<any> = ({
  text,
  ["children"]: _,
  willChangeTransform: __,
  ...props
}) => {
  return (
    <System.H6 {...props} style={style}>
      {text}
    </System.H6>
  );
};

export const H6 = withHOC(InnerH6);

H6.defaultProps = {
  width: 360,
  height: 25
};

addPropertyControls(H6, {
  ...TextPropertyControl,
  ...ColorPropertyControl
});
