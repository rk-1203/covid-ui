import React from 'react';
import { render } from '@testing-library/react';

import GlobalSummary from "./GlobalSummary";

const props = {
    summary: {
        NewConfirmed: 1929169,
        TotalConfirmed: 400178665,
        NewDeaths: 9389,
        TotalDeaths: 5760245,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: "2022-02-09T16:49:33.508Z"
    }
}

describe("GlobalSummary", () => {

    it("renders properly", () => {
        const { container } = render(<GlobalSummary {...props}/>);
        expect(container.firstChild).toMatchSnapshot();
    })

})