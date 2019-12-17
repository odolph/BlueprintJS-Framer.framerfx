import * as React from "react"
import * as System from "@blueprintjs/core"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "../generated/Code"
import { withHOC } from "../withHOC"
import { TextPropertyControl } from "../utils/PropertyControls"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

const InnerCode: React.SFC<any> = ({
    text,
    ["children"]: _,
    willChangeTransform: __,
    ...props}) => {
    return <System.Code {...props}>{text}</System.Code>;
}

export const Code = withHOC(InnerCode)

Code.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Code, {
    checked: merge(controls.checked, {}),
    disabled: merge(controls.disabled, {}),
    ...TextPropertyControl
})
