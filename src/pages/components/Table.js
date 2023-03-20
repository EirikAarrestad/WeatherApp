import "../styles/tablestyled.module.css";

const Table = (props) => {
    return (
        <table>
            <tr>{props.name}</tr>
            {props.thing}
            {props.subtext}
        </table>
    );
};
export default Table;
