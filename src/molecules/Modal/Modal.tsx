// Generated with util/create-component.js
import React from "react";
import ReactModal from "react-modal";
import { useTheme } from "styled-components";

import { ModalProps } from "./Modal.types";
import "./modal.css";

const Modal: React.FC<ModalProps> = ({
    open,
    color = "primary",
    onRequestClose,
    children,
    maxWidth = "80%",
}) => {
    const theme = useTheme();

    const backgroundColor = theme.colors.cell[color];
    return (
        <ReactModal
            isOpen={open}
            ariaHideApp={false}
            closeTimeoutMS={100}
            style={{
                overlay: {
                    backgroundColor: theme.colors.cell.overlay,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                },
                content: {
                    position: "relative",
                    maxWidth: maxWidth,
                    border: "none",
                    borderRadius: "16px",
                    backgroundColor,
                },
            }}
            onRequestClose={onRequestClose}
        >
            {children}
        </ReactModal>
    );
};

export default Modal;
