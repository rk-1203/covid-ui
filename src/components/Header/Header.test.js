import React from 'react';
import { render } from '@testing-library/react';

import Header from "./Header";

describe("Header", () => {
    it("renders properly", () => {
        const { container, getByText } = render(<Header />);
        expect(container.firstChild).toMatchSnapshot();
        expect(getByText("Header")).toBeInTheDocument();
    })
})