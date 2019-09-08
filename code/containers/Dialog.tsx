import * as React from "react"
import * as System from "@blueprintjs/core"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "./generated/Dialog"
import { withHOC } from "../withHOC"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

const InnerDialog: React.SFC = props => {
    return <System.Dialog {...props} style={style} />
}

export const Dialog = withHOC(InnerDialog)

Dialog.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Dialog, {
    isOpen: merge(controls.isOpen, {}),
    icon: merge(controls.icon, {}),
    isCloseButtonShown: merge(controls.isCloseButtonShown, {}),
    title: merge(controls.title, {}),
    transitionName: merge(controls.transitionName, {}),
    autoFocus: merge(controls.autoFocus, {}),
    canEscapeKeyClose: merge(controls.canEscapeKeyClose, {}),
    enforceFocus: merge(controls.enforceFocus, {}),
    lazy: merge(controls.lazy, {}),
    transitionDuration: merge(controls.transitionDuration, {}),
    usePortal: merge(controls.usePortal, {}),
    portalClassName: merge(controls.portalClassName, {}),
    backdropClassName: merge(controls.backdropClassName, {}),
    canOutsideClickClose: merge(controls.canOutsideClickClose, {}),
    hasBackdrop: merge(controls.hasBackdrop, {}),
    className: merge(controls.className, {}),
})
