// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import styled from "styled-components";

import { PopoverProps } from "./Popover.types";

const Portal = ({ children }: { children: React.ReactNode }) =>
    createPortal(children, document.body);

const Popover: React.FC<PopoverProps> = ({
    children,
    content,
    trigger = "click",
    placement = "bottom",
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [childEl, setChildEl] = useState<HTMLDivElement | null>(null);
    const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(childEl, popperEl, {
        placement,
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });

    const handleClick = (e: React.MouseEvent) => {
        if (trigger === "click" && childEl.contains(e.target as Node)) {
            setIsVisible(!isVisible);
        }
    };
    const handleClickOutside = (e: MouseEvent) => {
        if (
            trigger === "click" &&
            !popperEl.contains(e.target as Node) &&
            !childEl.contains(e.target as Node)
        ) {
            setIsVisible(false);
        }
    };
    const handleMouseEnter = (e: React.MouseEvent) => {
        if (trigger === "hover" && childEl.contains(e.target as Node)) {
            setIsVisible(true);
        }
    };
    const handleMouseLeave = (e: React.MouseEvent) => {
        if (trigger === "hover" && childEl.contains(e.target as Node)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return (
        <div data-testid="popover">
            <div
                ref={setChildEl}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            <Portal>
                <PopperCard
                    visible={isVisible}
                    ref={setPopperEl}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    {content}
                </PopperCard>
            </Portal>
        </div>
    );
};

export default Popover;

type PopperCardProps = {
    visible: boolean;
};

const PopperCard = styled.div<PopperCardProps>`
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;
