import "../styles/tablestyled.module.css";

const Table = (props) => {
    return (
        <table>
            <tr>
                <th>{props.name}</th>
                <th>{props.name}</th>
                <th>{props.name}</th>
            </tr>
            <tr>
                <td>{props.subtext}</td>
                <td>{props.subtext}</td>
                <td>{props.subtext}</td>
            </tr>
        </table>
    );
};
export default Table;
