import useSort from '../hooks/use-sort';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from "./Table";

function SortableTable(props) {
    const { config, data } = props;

    const { setSortColumn, sortBy, sortOrder, sortedData } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue){
            return column;
        } else {
            return {
                ...column,
                header: () => <th className="border-2 border-slate-300 h-12 hover:bg-gray-200 hover:cursor-pointer select-none" onClick={() => setSortColumn(column.label)}>
                        <div className='flex items-end'>
                          {getIcons(column.label, sortBy, sortOrder)}
                          {column.label}
                        </div>
                    </th>
            }
        }
    });

    return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    }
  
    if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else if (sortOrder === 'asc') {
      return (
        <div>
          <GoArrowSmallUp />
        </div>
      );
    } else if (sortOrder === 'desc') {
      return (
        <div>
          <GoArrowSmallDown />
        </div>
      );
    }
  }

export default SortableTable