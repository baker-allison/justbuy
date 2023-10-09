export const filterItems = (items, query) => {
    if (!query) {
        return items;
    }

    return items.filter((item) => {
        const itemName = item.toString().toLowerCase();
         return itemName.includes(query.toString().toLowerCase());
        // return itemName !== query.toString().toLowerCase();
    });
};