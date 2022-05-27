import React from "react";
import { render } from "@testing-library/react";
import { LoaderContent } from "./loader-content.element";

describe("LoaderContent", () => {
    it("renders", () => {
        render(<LoaderContent isVisivility={true}/>);
    });
});
