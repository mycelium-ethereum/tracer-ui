// Generated with util/create-component.js
import React, { useEffect } from "react";
import { AllocationSlider } from "../../molecules";
import { Card, Button, Icon, List, Popover, Input, InfoRow } from "../../atoms";

import { AssetAllocatorProps, Asset, Allocation } from "./AssetAllocator.types";
import styled from "styled-components";
import { roundToDecimal } from "../../helpers";

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
        const newWeightings = calculateNewAllocations(assetId, 0);
        const newAllocations = newWeightings.filter(
            (allocation) => allocation.assetId !== assetId,
        );
        onAllocationsChange(newAllocations);
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

    const handlePercentageChange = (assetId: string, percent: number) => {
        const newAllocations = calculateNewAllocations(assetId, percent);
        onAllocationsChange(newAllocations);
    };

    const calculateNewAllocations = (
        changedAssetId: string,
        newAssetPercentage: number,
    ) => {
        // Get the percentage remaining after the locked and changed allocations
        const allocsById: { [assetId: string]: number } = {};
        let percentRemaining = 100;
        let allocsToMove: Allocation[] = [];
        allocations.forEach((alloc) => {
            if (alloc.assetId === changedAssetId) {
                allocsById[alloc.assetId] = newAssetPercentage;
                percentRemaining -= newAssetPercentage;
            } else if (lockedAssetIds.includes(alloc.assetId)) {
                allocsById[alloc.assetId] = alloc.percentage;
                percentRemaining -= alloc.percentage;
            } else {
                allocsToMove.push(alloc);
            }
        });

        if (allocsToMove.length === 0) return allocations;

        const currentTotalPercent = allocsToMove.reduce((total, alloc) => {
            return total + alloc.percentage;
        }, 0);

        if (currentTotalPercent === 0) {
            allocsToMove.forEach((alloc) => {
                allocsById[alloc.assetId] = 0;
            });
        } else {
            // Distribute what remains to the remaining allocations proportionally
            allocsToMove.forEach((alloc) => {
                const newPercent =
                    (percentRemaining * alloc.percentage) / currentTotalPercent;
                allocsById[alloc.assetId] = roundToDecimal(newPercent, 2);
            });
        }

        // Ensure that the total percentage is 100% (rounding errors can cause it to be off)
        const sum = Object.keys(allocsById).reduce((total, id) => {
            return total + allocsById[id];
        }, 0);
        if (sum !== 100) {
            const diff = 100 - sum;
            const firstMovedAlloc = allocsToMove[0];
            allocsById[firstMovedAlloc.assetId] += roundToDecimal(diff, 2);
        }

        // Update the allocations
        const newAllocations = allocations.map((alloc) => ({
            assetId: alloc.assetId,
            percentage: allocsById[alloc.assetId],
        }));

        // Check for allocations outside the range
        for (const alloc of newAllocations) {
            if (alloc.percentage < 0 || alloc.percentage > 100) {
                return allocations;
            }
        }

        return newAllocations;
    };

    const renderDropdown = () => {
        const assetsForDropdown = assets.filter((asset) => {
            const alreadySelected = allocations.some(
                (aloc) => aloc.assetId === asset.id,
            );
            return assetMatchesSearch(asset) && !alreadySelected;
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

    const assetMatchesSearch = (asset: Asset) => {
        const searchTerms = [
            asset.symbol.toLowerCase(),
            asset.name.toLowerCase(),
        ];
        return searchTerms.some((term) => term.includes(search.toLowerCase()));
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
