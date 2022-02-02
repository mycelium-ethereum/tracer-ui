// Generated with util/create-component.js
import React, { useState } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";

import { PopoverProps } from "./Popover.types";

const Popover: React.FC<PopoverProps> = ({
    children,
    content,
    placement = "bottom",
    isOpen,
}) => {
    const [childEl, setChildEl] = useState<HTMLDivElement | null>(null);
    const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(childEl, popperEl, {
        placement,
    });

    return (
        <div data-testid="popover">
            <div ref={setChildEl}>{children}</div>
            <PopperCard
                visible={isOpen}
                ref={setPopperEl}
                style={styles.popper}
                {...attributes.popper}
            >
                {content}
            </PopperCard>
        </div>
    );
};

export default Popover;

type PopperCardProps = {
    visible: boolean;
};

const PopperCard = styled.div<PopperCardProps>`
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
    z-index: 9999;
`;
