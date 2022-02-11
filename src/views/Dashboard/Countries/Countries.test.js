import React from 'react';
import { act, getByRole, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Countries from "./Countries";

const props = {
    countries: [
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
            ID: "a51224c1-1c0c-4de0-997e-5154d146a60a",
            Country: "Albania",
            CountryCode: "AL",
            Slug: "albania",
            NewConfirmed: 0,
            TotalConfirmed: 265716,
            NewDeaths: 0,
            TotalDeaths: 3393,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        },
        {
            ID: "2a89dd4b-6f9c-4aa7-809e-274d82887084",
            Country: "Algeria",
            CountryCode: "DZ",
            Slug: "algeria",
            NewConfirmed: 0,
            TotalConfirmed: 259088,
            NewDeaths: 0,
            TotalDeaths: 6667,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        },
        {
            ID: "3416b50c-079e-48a4-a6fb-b56da7ac3cbd",
            Country: "Andorra",
            CountryCode: "AD",
            Slug: "andorra",
            NewConfirmed: 0,
            TotalConfirmed: 36808,
            NewDeaths: 0,
            TotalDeaths: 147,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        },
        {
            ID: "51449e6d-34a7-4fb1-bc05-15b41af6d823",
            Country: "Angola",
            CountryCode: "AO",
            Slug: "angola",
            NewConfirmed: 0,
            TotalConfirmed: 98424,
            NewDeaths: 0,
            TotalDeaths: 1896,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        },
        {
            ID: "72468853-06cc-4ad3-8aee-316d1092f99d",
            Country: "Antigua and Barbuda",
            CountryCode: "AG",
            Slug: "antigua-and-barbuda",
            NewConfirmed: 0,
            TotalConfirmed: 6853,
            NewDeaths: 0,
            TotalDeaths: 131,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        },
        {
            ID: "b5f6b7ab-5818-4e54-883b-5f096c7a3ade",
            Country: "Argentina",
            CountryCode: "AR",
            Slug: "argentina",
            NewConfirmed: 0,
            TotalConfirmed: 8648075,
            NewDeaths: 0,
            TotalDeaths: 123227,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        },
        {
            ID: "dad9b03d-acdc-41c5-86a2-164db926c6b8",
            Country: "Armenia",
            CountryCode: "AM",
            Slug: "armenia",
            NewConfirmed: 0,
            TotalConfirmed: 394074,
            NewDeaths: 0,
            TotalDeaths: 8102,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        },
        {
            ID: "a1ac89f7-1891-4e45-af78-dacdd4d01ff2",
            Country: "Australia",
            CountryCode: "AU",
            Slug: "australia",
            NewConfirmed: 31510,
            TotalConfirmed: 2811390,
            NewDeaths: 71,
            TotalDeaths: 4373,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        },
        {
            ID: "d8317184-6f56-4fef-b391-c8de386486f5",
            Country: "Austria",
            CountryCode: "AT",
            Slug: "austria",
            NewConfirmed: 0,
            TotalConfirmed: 2111314,
            NewDeaths: 0,
            TotalDeaths: 14271,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        },
        {
            ID: "796698c5-d73d-41c3-8722-d0f2b86e98ec",
            Country: "Azerbaijan",
            CountryCode: "AZ",
            Slug: "azerbaijan",
            NewConfirmed: 0,
            TotalConfirmed: 710366,
            NewDeaths: 0,
            TotalDeaths: 8920,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: "2022-02-09T16:49:33.508Z",
            Premium: {}
        }
    ],
}

describe("Countries", () => {

    it("renders properly", () => {
        const { container } = render(<Countries {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it("handles filters and pagination properly", async () => {
        const { container,  getByPlaceholderText, getByText, getByRole } = render(<Countries {...props} />);
        const searchElement = getByPlaceholderText("Search");
        const filterByElement = getByPlaceholderText("Search By").previousSibling;
        const page1ButtonElement = getByRole('button', {name: /1/});
        expect(page1ButtonElement).toBeInTheDocument();
        act(() => userEvent.type(searchElement, '-1'));
        await waitFor(() => expect(page1ButtonElement).not.toBeInTheDocument());
        userEvent.click(filterByElement);
        const optionElement = getByText("Total Deaths");
        act(() => userEvent.click(optionElement));
        expect(searchElement.value).toBe("");
        expect(container.firstChild).toMatchSnapshot();
    });

})