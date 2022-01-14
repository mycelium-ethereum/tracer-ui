// Generated with util/create-component.js
import React, { useEffect } from "react";
import { AllocationSlider } from "../../molecules";
import { Card, Button, Icon, List, Popover, Input, InfoRow } from "../../atoms";

import { AssetAllocatorProps, Asset, Allocation } from "./AssetAllocator.types";
import styled from "styled-components";

const AssetAllocator: React.FC<AssetAllocatorProps> = ({
    assets,
    addButtonText,
    emptyText,
    searchText,
    removeButtonText,
    allocations,
    onAllocationsChange,
    emptySearchText,
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const searchBarRef = React.useRef<HTMLInputElement>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const [lockedAssetIds, setLockedAssetIds] = React.useState<string[]>([]);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");

    useEffect(() => {
        document.addEventListener("click", handleClickEvents);
        return () => {
            document.removeEventListener("click", handleClickEvents);
        };
    }, [dropdownOpen]);

    const handleClickEvents = (event: MouseEvent) => {
        const isDropdownClicked = dropdownRef?.current?.contains(
            event.target as Node,
        );
        const isSearchBarClicked = searchBarRef?.current?.contains(
            event.target as Node,
        );
        if (dropdownOpen && !isDropdownClicked && !isSearchBarClicked) {
            closeDropdown();
        }
    };

    const addMarket = (assetId: string) => {
        const isFirstAsset = allocations.length === 0;
        allocations.push({
            assetId,
            percentage: isFirstAsset ? 100 : 0,
        });
        onAllocationsChange(allocations);
        closeDropdown();
    };

    const removeMarket = (assetId: string) => {
        allocations = allocations.filter(
            (allocation) => allocation.assetId !== assetId,
        );
        onAllocationsChange(allocations);
    };

    const openDropdown = () => setDropdownOpen(true);
    const closeDropdown = () => setDropdownOpen(false);

    const toggleLock = (assetId: string) => {
        if (lockedAssetIds.includes(assetId)) {
            setLockedAssetIds(lockedAssetIds.filter((id) => id !== assetId));
        } else {
            setLockedAssetIds([...lockedAssetIds, assetId]);
        }
    };

    const handlePercentageChange = (assetId: string, percentage: number) => {
        const oldAllocation = allocations.find(
            (alloc) => alloc.assetId === assetId,
        );

        // Amount moved from movable assets to changed asset
        const delta = percentage - oldAllocation.percentage;
        const amountToDistribute = -delta;

        const allocDeltas: { [assetId: string]: number } = {};
        const movableAllocs: Allocation[] = [];
        allocations.forEach((allocation) => {
            if (allocation.assetId === assetId) {
                allocDeltas[allocation.assetId] = delta;
            } else if (isImmovableAsset(allocation)) {
                allocDeltas[allocation.assetId] = 0;
            } else {
                movableAllocs.push(allocation);
            }
        });

        // console.log({ movableAllocs });
        // There is nowhere to move the delta, so do nothing
        if (movableAllocs.length === 0) return;

        // Distribute the delta across the movable assets
        // Keeping the proportions of the assets the same

        if (delta > 0) {
            // Moving towards zero
            const total = movableAllocs.reduce((acc, alloc) => {
                return acc + alloc.percentage;
            }, 0);
            movableAllocs.forEach((alloc) => {
                allocDeltas[alloc.assetId] =
                    (alloc.percentage / total) * -delta;
            });
        } else {
            // Moving towards 100, so use the percent away from 100
            const total = movableAllocs.reduce((acc, alloc) => {
                return acc + (100 - alloc.percentage);
            }, 0);
            movableAllocs.forEach((alloc) => {
                allocDeltas[alloc.assetId] =
                    ((100 - alloc.percentage) / total) * -delta;
            });
        }

        // Round to the nearest 0.01
        Object.keys(allocDeltas).forEach((assetId) => {
            allocDeltas[assetId] = Math.round(allocDeltas[assetId] * 100) / 100;
        });

        // Ensure that the sum of all deltas is 0
        const allocDeltaSum = Object.values(allocDeltas).reduce(
            (acc, val) => acc + val,
            0,
        );
        // Use the first movable asset to adjust the rest
        const firstMovableAssetId = movableAllocs[0].assetId;
        allocDeltas[firstMovableAssetId] -= allocDeltaSum;

        const newAllocDeltaSum = Object.values(allocDeltas).reduce(
            (acc, val) => acc + val,
            0,
        );
        console.log({ allocDeltas, newAllocDeltaSum });

        const newAllocations = allocations.map((allocation) => {
            return {
                ...allocation,
                percentage:
                    allocation.percentage + allocDeltas[allocation.assetId],
            };
        });
        onAllocationsChange(newAllocations);

        // onAllocationsChange(newAllocations);
        function isImmovableAsset(allocation: Allocation) {
            const isLocked = lockedAssetIds.includes(allocation.assetId);
            if (isLocked) return true;
            if (delta > 0) {
                return allocation.percentage === 0;
            } else {
                return allocation.percentage === 100;
            }
        }
    };

    type AllocById = { [assetId: string]: number };
    const distributeDeltaRecursively = (
        allocations: AllocById,
        remainingDelta: number,
    ): AllocById => {
        if (remainingDelta === 0) return allocations;
        const deltaPerAsset = remainingDelta / Object.keys(allocations).length;
        // Find if any assets will max out
        if (deltaPerAsset > 0) {
            // Moving towards 100
        } else {
            // Moving towards 0
        }
    };

    const renderDropdown = () => {
        const assetsForDropdown = assets.filter((asset) => {
            const matchesSearch =
                asset.symbol.includes(search) || asset.name.includes(search);
            const alreadySelected = allocations.some(
                (aloc) => aloc.assetId === asset.id,
            );
            return matchesSearch && !alreadySelected;
        });
        return (
            <Dropdown
                width={containerRef.current?.offsetWidth}
                ref={dropdownRef}
            >
                <List separator>
                    {assetsForDropdown.map((asset) => {
                        return (
                            <ListItem>
                                <InfoRow
                                    key={asset.id}
                                    title={asset.name}
                                    subtitle={asset.symbol}
                                    imageSrc={asset.imageSrc}
                                >
                                    <Button
                                        size="small"
                                        variant="action"
                                        onClick={() => addMarket(asset.id)}
                                    >
                                        <Icon name="plus" color="action-text" />
                                        &nbsp; {addButtonText}
                                    </Button>
                                </InfoRow>
                            </ListItem>
                        );
                    })}
                    {assetsForDropdown.length === 0 && (
                        <EmptySearchText>{emptySearchText}</EmptySearchText>
                    )}
                </List>
            </Dropdown>
        );
    };

    return (
        <Container data-testid="AssetAllocator" ref={containerRef}>
            <Popover
                isOpen={dropdownOpen}
                placement="bottom-start"
                content={renderDropdown()}
            >
                <Input
                    ref={searchBarRef}
                    leftSlot={<Icon name="search" color="tertiary" />}
                    placeholder={searchText}
                    value={search}
                    onChange={(e) => setSearch((e.target as any).value)}
                    onFocus={() => openDropdown()}
                />
            </Popover>
            <div style={{ height: "16px" }} />
            {allocations.length === 0 ? (
                <EmptyCard fluid onClick={openDropdown}>
                    {emptyText}
                </EmptyCard>
            ) : (
                <Card fluid color="secondary" padding="none">
                    <List separator>
                        {allocations.map((allocation) => {
                            const { assetId, percentage } = allocation;
                            const asset = assets.find(
                                (asset) => asset.id === assetId,
                            );
                            if (!asset) {
                                return null;
                            }
                            return (
                                <AssetContainer key={asset.id}>
                                    <AllocationSlider
                                        percentage={percentage}
                                        isLocked={lockedAssetIds.includes(
                                            assetId,
                                        )}
                                        tokenName={asset.symbol}
                                        tokenSymbol={asset.symbol}
                                        tokenImageSrc={asset.imageSrc}
                                        removeButtonText={removeButtonText}
                                        onRemove={() => removeMarket(assetId)}
                                        onClickLock={() => toggleLock(assetId)}
                                        onChange={(percentage) =>
                                            handlePercentageChange(
                                                assetId,
                                                percentage,
                                            )
                                        }
                                    />
                                </AssetContainer>
                            );
                        })}
                        <FooterButtonContainer>
                            <Button
                                size="small"
                                variant="action"
                                onClick={() => openDropdown()}
                            >
                                <Icon name="plus" color="action-text" />
                                &nbsp;{addButtonText}
                            </Button>
                        </FooterButtonContainer>
                    </List>
                </Card>
            )}
        </Container>
    );
};

export default AssetAllocator;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 700px;
    width: 100%;
`;

const EmptyCard = styled(Card)`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.text.tertiary};
    cursor: pointer;
`;

const AssetContainer = styled.div`
    padding: 24px;
`;

const FooterButtonContainer = styled.div`
    margin: 19px auto;
    width: 120px;
`;

type DropdownProps = {
    width: number;
};

const Dropdown = styled.div<DropdownProps>`
    background-color: ${(props) => props.theme.colors.cell.background};
    border-radius: 0px 0px 16px 16px;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1),
        0px 10px 10px rgba(0, 0, 0, 0.04);
    width: ${(props) => props.width}px;
    overflow: hidden;
`;

const ListItem = styled.div`
    background-color: ${(props) => props.theme.colors.cell.primary};
    :hover {
        background-color: ${(props) => props.theme.colors.cell.secondary};
    }
    cursor: pointer;
`;

const EmptySearchText = styled.div`
    background-color: ${(props) => props.theme.colors.cell.primary};
    color: ${(props) => props.theme.colors.text.secondary};
    font-size: 14px;
    padding: 16px;
    text-align: center;
`;
