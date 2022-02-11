import React from 'react';
import { render } from '@testing-library/react';

import Footer from "./Footer";

describe("Footer", () => {
    it("renders properly", () => {
        const { container, getByText } = render(<Footer />);
        expect(container.firstChild).toMatchSnapshot();
        expect(getByText("Footer")).toBeInTheDocument();
    })
})