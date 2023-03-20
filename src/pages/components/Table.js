import "../styles/tablestyled.module.css";

const Table = (props) => {
    return (
        <table>
            <tr>{props.name}</tr>
            {props.subtext}
        </table>
    );
};
export default Table;
