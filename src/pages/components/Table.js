import "../styles/tablestyled.module.css";

const SimpleTable = (props) => {
    return (
        <table>
            <tr>{props.tableHeader}</tr>
            {props.tableContent}
        </table>
    );
};
export default SimpleTable;
