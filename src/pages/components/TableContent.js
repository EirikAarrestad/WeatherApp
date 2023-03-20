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
    if (i === 0) {
        timeAray.push(`00:${i}0`);
    } else if (i != 0 && i <= 9) {
        timeAray.push(`0${i}:00`);
    } else {
        timeAray.push(`${i}:00`);
    }
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
