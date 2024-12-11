export const sortData = (data, by, order) => {
    const sortedData = [...data].sort((a, b) => {
        switch (by) {
            case 'rating':
                return order === 'asc' ? a.rating - b.rating : b.rating - a.rating;
            case 'date':
                return  order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
            default:
                return 0;
        }
    });

    return sortedData;
};