import React from "react";
import { render } from "@testing-library/react";
import { Logo } from "./logo.element";

describe("Logo", () => {
    it("renders", () => {
        render(<Logo isPreloaderHide={true}/>);
    });
});