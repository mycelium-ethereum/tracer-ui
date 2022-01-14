// Generated with util/create-component.js
export interface AllocationSliderProps {
    tokenName: string;
    tokenSymbol: string;
    tokenImageSrc: string;
    percentage: number;
    isLocked: boolean;
    removeButtonText: string;
    onChange: (percentage: number) => void;
    onRemove: () => void;
    onClickLock: () => void;
}
