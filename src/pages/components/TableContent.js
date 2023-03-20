import Table from "./Table";

const data = [
    {
        tableHeaders: ["Tid", "Temp", "Dag"],
        subtext: [["kl 19", "kl 20", "kl 21", "kl 22", "kl 23"]],
    },
];

const header = data[0].tableHeaders.map((index) => {
    return index;
});

const tableText = data[0].subtext[0].map((index) => {
    return index;
});

console.log(tableText);

const FinalTable = () => {
    return (
        <div>
            {data.map((tbContent) => {
                return (
                    <Table
                        key={tbContent.subtext}
                        name={header.map((header) => (
                            <th>{header}</th>
                        ))}
                        subtext={tableText.map((Tabletext) => (
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
