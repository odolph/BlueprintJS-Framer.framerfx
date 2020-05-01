import * as React from "react"
import * as System from "@blueprintjs/core"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "../generated/Blockquote"
import { withHOC } from "../withHOC"
import { TextPropertyControl } from "../utils/PropertyControls"

const style: React.CSSProperties = {
    width: "100%",
    height: "50%",
}

const InnerBlockquote: React.SFC<any> = ({
    text,
    ["children"]: _,
    willChangeTransform: __,
    ...props}) => {
    return <System.Blockquote {...props}>{text}</System.Blockquote>;
}

export const Blockquote = withHOC(InnerBlockquote)

Blockquote.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Blockquote, {
    ...TextPropertyControl,
})
