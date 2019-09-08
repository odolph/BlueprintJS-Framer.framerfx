import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Card";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCard: React.SFC = props => {
  return <System.Card {...props} style={style} />;
};

export const Card = withHOC(InnerCard);

Card.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Card, {
  elevation: merge(controls.elevation, {}),
  interactive: merge(controls.interactive, {}),
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
