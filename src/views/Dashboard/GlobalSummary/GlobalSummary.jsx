import { getFormattedDate, getFormattedNumber, getFormattedTime } from '../../../utils/utils';
import "./GlobalSummary.scss";

function GlobalSummary({ summary }) {

    const { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date } = summary;

    return (
        <section className="global-summary">
            <h1>Global Summary</h1>
            <div className="summary-items">
                <div className="item">
                    <span className="label">New Confirmed Cases</span>
                    {getFormattedNumber(NewConfirmed)}
                </div>
                <div className="item">
                    <span className="label">Total Confirmed Cases</span>
                    {getFormattedNumber(TotalConfirmed)}
                </div>
                <div className="item">
                    <span className="label">New Deaths</span>
                    {getFormattedNumber(NewDeaths)}
                </div>
                <div className="item">
                    <span className="label">Total Deaths</span>
                    {getFormattedNumber(TotalDeaths)}
                </div>
                <div className="item">
                    <span className="label">New Recovered Cases</span>
                    {getFormattedNumber(NewRecovered)}
                </div>
                <div className="item">
                    <span className="label">Total Recovered Cases</span>
                    {getFormattedNumber(TotalRecovered)}
                </div>
                <div className="item">
                    <span className="label">Last Updated Time</span>{`${getFormattedDate(Date)}, ${getFormattedTime(Date)}`}
                </div>
            </div>
        </section>
    );
}

export default GlobalSummary;
