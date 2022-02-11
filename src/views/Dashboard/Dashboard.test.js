import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Dashboard from "./Dashboard";
import APIService from "../../services/api.service";

jest.mock("../../services/api.service");

const fetchCovidStatsSummaryResponse = {
    ID: "10ab870f-bedb-427b-a27a-b54d87118b75",
    Message: "",
    Global: {
        NewConfirmed: 1929169,
        TotalConfirmed: 400178665,
        NewDeaths: 9389,
        TotalDeaths: 5760245,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: "2022-02-09T16:49:33.508Z"
    },
    Countries: [
        {
            ID: "e0296b5d-0c21-484d-be0f-7ee48a5f9a7b",
            Country: "Afghanistan",
            CountryCode: "AF",
            Slug: "afghanistan",
            NewConfirmed: 0,
            TotalConfirmed: 167739,
            NewDeaths: 0,
            TotalDeaths: 7454,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        },
        {
            ID: "ed082dda-b5ff-4d18-ad39-b97cc29e4de7",
            Country: "Barbados",
            CountryCode: "BB",
            Slug: "barbados",
            NewConfirmed: 0,
            TotalConfirmed: 49372,
            NewDeaths: 0,
            TotalDeaths: 288,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        }
    ],
    Date: "2022-02-09T16:49:33.508Z"
}

describe("Dashboard", () => {
    it("renders loading state properly", () => {
        APIService.fetchCovidStatsSummary.mockResolvedValue(new Promise(() => {}))
        const { container } = render(<Dashboard />);
        expect(container.firstChild).toMatchSnapshot();
    })

    it("renders loaded state properly", async () => {
        APIService.fetchCovidStatsSummary.mockResolvedValue(Promise.resolve({ data: fetchCovidStatsSummaryResponse}))
        const { container, getByText } = render(<Dashboard />);
        await waitFor(() => expect(APIService.fetchCovidStatsSummary).toBeCalledTimes(1));
        expect(container.firstChild).toMatchSnapshot();
    })
})