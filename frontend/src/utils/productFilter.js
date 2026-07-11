export const filterProducts = (
    products,
    selectedCategory,
    priceLimit,
    selectedRating
) => {
    return products.filter(product => {
        const categoryMatch =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        const priceMatch =
            product.price <= priceLimit;

        const ratingMatch =
            product.rating >= selectedRating;

        return (
            categoryMatch &&
            priceMatch &&
            ratingMatch
        );
    });
};