import { COUNTRY_SUMMARY_TABLE_COLUMNS } from "../../../../constants/constant";
import "./Country.scss";

function Country(props) {

    return (
        <tr className="country-row">
            {
                COUNTRY_SUMMARY_TABLE_COLUMNS.map(({id, displayName, formatter = v => v}) => (
                    <td data-th={displayName} key={id}>{formatter(props[id])}</td>
                ))
            }
        </tr>
    )

}

export default Country;
