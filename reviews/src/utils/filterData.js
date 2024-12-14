export const filterData = (data, filters) => {
    const { platforms, ratingRange } = filters;
    
    return data.filter(item =>
        (platforms.length ? platforms.includes(item.platform) : true) &&
        (item.rating >= ratingRange[0] && item.rating <= ratingRange[1])
    )
};