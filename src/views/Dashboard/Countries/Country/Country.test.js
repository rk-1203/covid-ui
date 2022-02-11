import React from 'react';
import { render } from '@testing-library/react';

import Country from "./Country";

const props = {
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
}

describe("Country", () => {
    it("renders properly", () => {
        const { container } = render(
            <table>
                <tbody>
                    <Country {...props} />
                </tbody>
            </table>
        );
        expect(container.firstChild).toMatchSnapshot();
    })
})