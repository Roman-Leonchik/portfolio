import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Menu } from "./menu.element";

let element: HTMLElement;
let mockToggle: () => void;
beforeEach(() => {
    const data = [
        {
            link: "link test",
            key: "key",
            text: "Link text"
        },
    ]
    mockToggle = jest.fn();

    render(
        <Menu data={data} onClick={mockToggle} lang="en" path="link" isOpenMenu={true}/>
        );
    element = screen.getByTestId("menu");
});

describe("ModalWindow", () => {
    it("renders", () => {
        expect(element).toBeInTheDocument();
    });

    it("click button mobile", () => {
        fireEvent.click(screen.getByTestId("button-mob"));
        expect(mockToggle).toBeCalled();
    });

    it("has lang", () => {
        expect(screen.getByText("en")).toBeInTheDocument();
    });

    it("shows correct data", () => {
        expect(screen.getByText("Link text")).toBeInTheDocument();
    });
});