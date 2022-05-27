import React from "react";
import { render } from "@testing-library/react";
import { BlockInfo } from "./block-info.element";

const infoArray = [
    {
        id: "Id",
        date: "Date",
        title: "Title",
        text: "Text"
    }
]

describe("BlockInfo", () => {
    it("renders", () => {
        render(<BlockInfo infoArray={infoArray}/>);
    });
});
