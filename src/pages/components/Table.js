import "../styles/tablestyled.module.css";

const SimpleTable = (props) => {
    return (
        <table>
            <tr>{props.name}</tr>
            {props.thing}
            {props.subtext}
        </table>
    );
};
export default SimpleTable;
