import * as React from "react"
import * as System from "@blueprintjs/core"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "../generated/Checkbox"
import { withHOC } from "../withHOC"
import { LabelPropertyControl } from "../utils/PropertyControls"
import { useManagedState } from "../utils/useManagedState"

const InnerCheckbox: React.SFC<any> = ({ checked, label, ...props }) => {
  const [currentlyChecked, setChecked] = useManagedState(checked)
  return (
    <System.Checkbox checked={currentlyChecked} onChange={e => setChecked(e.target["checked"])} {...props}>
      {label}
    </System.Checkbox>
  )
}

export const Checkbox = withHOC(InnerCheckbox)

Checkbox.defaultProps = {
  width: 150,
  height: 25
};

addPropertyControls(Checkbox, {
  defaultIndeterminate: merge(controls.defaultIndeterminate, {}),
  indeterminate: merge(controls.indeterminate, {}),
  checked: merge(controls.checked, {}),
  defaultChecked: merge(controls.defaultChecked, {}),
  disabled: merge(controls.disabled, {}),
  ...LabelPropertyControl,
});
