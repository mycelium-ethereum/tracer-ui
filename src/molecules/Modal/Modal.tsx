// Generated with util/create-component.js
import React from "react";
import ReactModal from "react-modal";
import { useTheme } from "styled-components";

import { ModalProps } from "./Modal.types";

const Modal: React.FC<ModalProps> = ({
    open,
    color = "primary",
    onRequestClose,
    children,
    maxWidth,
}) => {
    const theme = useTheme();

    const backgroundColor = theme.colors.cell[color];
    return (
        <ReactModal
            isOpen={open}
            style={{
                overlay: {
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                },
                content: {
                    position: "relative",
                    maxWidth: maxWidth || "80%",
                    border: "none",
                    borderRadius: "16px",
                    boxShadow:
                        "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
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
