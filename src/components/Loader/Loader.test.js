import React from 'react';
import { render } from '@testing-library/react';

import Loader from "./Loader";

describe("Loader", () => {
    it("renders properly", () => {
        const { container, getByAltText } = render(<Loader />);
        expect(container.firstChild).toMatchSnapshot();
        expect(getByAltText("Loading...")).toBeInTheDocument();
    })
})