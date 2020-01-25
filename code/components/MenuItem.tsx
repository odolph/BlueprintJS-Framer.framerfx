import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/MenuItem";
import { withHOC } from "../withHOC";
import { Menu } from "@blueprintjs/core";
import { hide } from "@blueprintjs/core/lib/esm/components/context-menu/contextMenu";


const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
/* 
  marginTop:-14,
  marginLeft: -80,
*/
};

const InnerMenuItem: React.SFC = props => {
  return (
    <menu class="bp3-menu" style={{padding: 0, minWidth: 80}}>
      <System.MenuItem {...props} style={style}/>
    </menu>
  );
};

export const MenuItem = withHOC(InnerMenuItem);

MenuItem.defaultProps = {
  width: 150,
  height: 30,
  overflow: hide
};

addPropertyControls(MenuItem, {
  text: merge(controls.text, { defaultValue: "Settings" }),
  active: merge(controls.active, { defaultValue: true }),
  disabled: merge(controls.disabled, {}),
  label: merge(controls.label, {}),
  multiline: merge(controls.multiline, {}),
  icon: merge(controls.icon, { defaultValue: "cog" }),
  intent: merge(controls.intent, {})
});
