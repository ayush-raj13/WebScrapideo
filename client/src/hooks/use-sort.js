import { useState } from "react";

function useSort(data, config) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) => {
        if (sortBy !== label){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        if (sortOrder === null){
            setSortOrder('asc');
        } else if (sortOrder === 'asc'){
            setSortOrder('desc');
        } else if (sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const sortedData = data;

    if (sortOrder && sortBy){
        const { sortValue } = config.find((column) => column.label === sortBy);

        sortedData.sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;
    
            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return {
        setSortColumn,
        sortBy,
        sortOrder,
        sortedData
    };
}

export default useSort