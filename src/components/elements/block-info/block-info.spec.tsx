import React from "react";
import { render, screen } from "@testing-library/react";
import { BlockInfo, IArray } from "./block-info.element";

let infoArray: IArray[];
beforeEach(() => {
    infoArray = [
        {
            id: "Id",
            date: "Date test",
            title: "Title test",
            text: "Text test"
        }
    ];
});

describe("BlockInfo", () => {
    it("renders", () => {
        render(<BlockInfo infoArray={infoArray}/>);
    });

    it("shows correct data", () => {
        render(<BlockInfo infoArray={infoArray}/>);
        expect(screen.getByText("Date test")).toBeInTheDocument();
        expect(screen.getByText("Title test")).toBeInTheDocument();
        expect(screen.getByText("Text test")).toBeInTheDocument();
    });
});
