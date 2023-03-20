import Table from "./Table";

const data = [
    {
        tableHeaders: ["Tid", "Temp", "Dag"],
        subtext: ["kl 19", "kl 20", "kl 21", "kl 22", "kl 23"],
    },
];

const TableHeaderIndex = data[0].tableHeaders.map((index) => {
    return index;
});

const TableContents = data[0].subtext.map((index) => {
    return index;
});

const FinalTable = (props) => {
    return (
        <div>
            {data.map((tbContent) => {
                return (
                    <Table
                        key={tbContent.subtext}
                        name={TableHeaderIndex.map((tableHeaders) => (
                            <th>{tableHeaders}</th>
                        ))}
                        subtext={TableContents.map((Tabletext) => (
                            <tr>
                                <td>{Tabletext}</td>
                            </tr>
                        ))}
                    ></Table>
                );
            })}
        </div>
    );
};
export default FinalTable;
