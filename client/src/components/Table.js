import { Fragment, useState } from "react";
import Button from "./Button";

function Table({ data, config }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const renderedHeaders = config.map((column) => {
        return (
            ( column.header && <Fragment key={column.label}>{column.header()}</Fragment> ) || <th className="text-left border-2 border-slate-300" valign='bottom' key={column.label}>{column.label}</th>
        )
    });

    const renderedRows = data.map((item) => {
        const renderedCells = config.map((column) => {
            return (
                <td key={column.label} className="py-3 pr-3 border-collapse border-2 border-slate-300">{column.render(item)}</td>
            );
        });

        return (
            <tr className="border-b" key={item.Product_url || item.url}>
                {renderedCells}
            </tr>
        );
    });

    const handleTableExpand = (event) => {
        document.getElementById("table").classList.toggle('max-h-[500px]');
        setIsExpanded(!isExpanded);
    }

    return (
        <div>
            <div id="table" className="max-h-[500px] overflow-x-auto overflow-y-hidden">
            <Button primary onClick={handleTableExpand} className="mb-4">{isExpanded ? "Collapse Table" : "Expand Table"}</Button>
            <table className="table-auto border-spacing-2 mb-60">
                <thead>
                    <tr className="border-b-2">
                        {renderedHeaders}
                    </tr>
                </thead>
                <tbody>{renderedRows}</tbody>
            </table>
            </div>
            
        </div>
    );
}

export default Table