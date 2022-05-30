import React from "react";
import { render, screen } from "@testing-library/react";
import { SocialIcon } from "./social-icon.element";

let element: ChildNode | null;
beforeEach(() => {
    const { container } = render(<SocialIcon icon="icon" href="links" h={40} w={40} className="test-class"/>);
    element = container.firstChild;
});

describe("SocialIcon", () => {
    it("renders", () => {
        expect(element).toBeInTheDocument();
    });

    it("has class", () => {
        expect(element).toHaveAttribute("href", expect.stringContaining("links"));
    });

    it("has href", () => {
        expect(element).toHaveClass("test-class");
    });

    it("has icon", () => {
        expect(screen.getByTestId("use-icon")).toHaveAttribute("xlink:href", expect.stringContaining("/svg/social-sprite.svg#icon"));
    });

    it("has height icon", () => {
        expect(screen.getByTestId("social-icon")).toHaveAttribute("height", expect.stringContaining("40"));
    });

    it("has width icon", () => {
        expect(screen.getByTestId("social-icon")).toHaveAttribute("width", expect.stringContaining("40"));
    });
    
});