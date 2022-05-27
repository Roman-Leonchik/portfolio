import React from "react";
import { render, screen } from "@testing-library/react";
import { CustomLink } from "./custom-link.element";

describe("CustomLink", () => {
    it("renders", () => {
        render(<CustomLink href="#"/>);
    });

    it("has children", () => {
        render(<CustomLink href="#">Children text</CustomLink>);
        expect(screen.getByText("Children text")).toBeInTheDocument();
    });

    it("has class", () => {
        const { container } = render(<CustomLink href="#" className="test-class-link"/>);
        expect(container.firstChild).toHaveClass("test-class-link");
    });

    it("has target", () => {
        render(<CustomLink href="#" target="_blank"/>);
        expect(screen.getByTestId("custom-link")).toHaveAttribute("target");
    });
});
