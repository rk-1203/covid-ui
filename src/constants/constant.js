import { getFormattedNumber } from "../utils/utils";

export const ENV_NAME = {
    PROD: "PROD",
    QA: "QA",
    DEV: "DEV"
};

export const ROUTES = {
    DASHBOARD: "/"
}

export const COUNTRY_SUMMARY_TABLE_COLUMNS = [{
    id: "Country",
    displayName: "Country",
},{
    id: "NewConfirmed",
    displayName: "New Confirmed",
    formatter: value => getFormattedNumber(value)
},{
    id: "TotalConfirmed",
    displayName: "Total Confirmed",
    formatter: value => getFormattedNumber(value)
},{
    id: "NewDeaths",
    displayName: "New Deaths",
    formatter: value => getFormattedNumber(value)
},{
    id: "TotalDeaths",
    displayName: "Total Deaths",
    formatter: value => getFormattedNumber(value)
},{
    id: "NewRecovered",
    displayName: "New Recovered",
    formatter: value => getFormattedNumber(value)
},{
    id: "TotalRecovered",
    displayName: "Total Recovered",
    formatter: value => getFormattedNumber(value)
}]

export const SORT_ORDER = {
    ASC: "ASCENDING",
    DSC: "DESCENDING",
}

export const PAGE_SIZE = 10;