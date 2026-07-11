export const sortProducts = (
    products,
    sortBy
) => {

    const sorted = [...products];

    switch (sortBy) {

        case "priceLowToHigh":
            sorted.sort((a, b) => a.price - b.price);
            break;

        case "priceHighToLow":
            sorted.sort((a, b) => b.price - a.price);
            break;

        case "rating":
            sorted.sort((a, b) => b.rating - a.rating);
            break;

        default:
            break;
    }

    return sorted;
}