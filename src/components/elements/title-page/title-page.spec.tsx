import React from "react";
import { render, screen } from "@testing-library/react";
import { TitlePage } from "./title-page.element";

describe("TitlePage", () => {
    it("renders", () => {
        render(<TitlePage />);
    });

    it("renders", () => {
        render(<TitlePage>Title</TitlePage>);
        expect(screen.getByText("Title")).toBeInTheDocument();
    });
});