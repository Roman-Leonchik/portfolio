import React from "react";
import { render, screen } from "@testing-library/react";
import { PreloaderWebsite } from "./preloader-site.element";

describe("PreloaderWebsite", () => {
    it("renders", () => {
        render(<PreloaderWebsite loader={true} />);
    });

    it("appearance of animation", () => {
        render(<PreloaderWebsite loader={false} />);
        expect(screen.getByTestId("preloader")).toHaveStyle(
            "animation-delay: 0.5s;",
        );
    });
});