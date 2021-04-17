export const getTotalPrice = (price: number, coverage: string, feature: string): number => {
    let res = price;
    res += (coverage === '1') ? 0 : 75;
    res += (feature === '1') ? 0 : 25;
    return res;
}