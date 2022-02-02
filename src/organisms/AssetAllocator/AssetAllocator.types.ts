// Generated with util/create-component.js
export type Asset = {
    id: string;
    name: string;
    symbol: string;
    imageSrc?: string;
};

export type Allocation = {
    assetId: string;
    percentage: number;
};

export interface AssetAllocatorProps {
    assets: Asset[];
    allocations: Allocation[];
    onAllocationsChange: (allocations: Allocation[]) => void;
    addButtonText: string;
    removeButtonText: string;
    searchText: string;
    emptyText: string;
    emptySearchText?: string;
}
