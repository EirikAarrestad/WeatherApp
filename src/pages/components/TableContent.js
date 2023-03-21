import SimpleTable from "./Table";

const tableData = [
    {
        tableHeaders: ["Hour", "Temp (In celcius)", "Image"],
    },
];

const TableHeaderIndex = tableData[0].tableHeaders.map((index) => {
    return index;
});

let hourArray = [];
for (let i = 0; i < 24; i++) {
    if (i === 0) {
        hourArray.push(`00:00`);
    } else if (i != 0 && i <= 9) {
        hourArray.push(`0${i}:00`);
    } else {
        hourArray.push(`${i}:00`);
    }
}

const HourlyTemperatureTable = (props) => {
    return (
        <div>
            {tableData.map(() => {
                return (
                    <SimpleTable
                        tableHeader={TableHeaderIndex.map((tableHeaders) => (
                            <th key={tableHeaders}>{tableHeaders}</th>
                        ))}
                        tableContent={hourArray.map((hour, index) => (
                            <tr key={hour}>
                                <td>{hour}</td>
                                <td>{props.tempArray[index]}</td>
                                <td style={{ textAlign: "center" }}>
                                    <img
                                        style={{
                                            height: "40px",
                                        }}
                                        src={props.imgArray[index]}
                                    />
                                </td>
                            </tr>
                        ))}
                    ></SimpleTable>
                );
            })}
        </div>
    );
};

export default HourlyTemperatureTable;
