import Table from "./Table";

const data = [
    {
        tableHeaders: ["Hour", "Temp (In celcius)"],
    },
];

const TableHeaderIndex = data[0].tableHeaders.map((index) => {
    return index;
});

let timeAray = [];
for (let i = 0; i < 24; i++) {
    timeAray.push(i);
}

const FinalTable = (props) => {
    return (
        <div>
            {data.map(() => {
                return (
                    <Table
                        name={TableHeaderIndex.map((tableHeaders) => (
                            <th key={tableHeaders}>{tableHeaders}</th>
                        ))}
                        thing={timeAray.map((hour, index) => (
                            <tr key={hour}>
                                <td>{hour}</td>
                                <td>{props.tempArray[index]}</td>
                            </tr>
                        ))}
                    ></Table>
                );
            })}
        </div>
    );
};

export default FinalTable;
