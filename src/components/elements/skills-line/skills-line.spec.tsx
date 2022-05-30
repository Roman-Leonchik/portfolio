import React from "react";
import { render, screen } from "@testing-library/react";
import { SkillsLine } from "./skills-line.element";

describe("SkillsLine", () => {
    it("renders", () => {
        render(<SkillsLine name="Test line" progress={20} />);
    });

    it("has name", () => {
        render(<SkillsLine name="Test line" progress={20} />);
        expect(screen.getByText("Test line")).toBeInTheDocument();
    });

    it("has progress", () => {
        render(<SkillsLine name="Test line" progress={20} />);
        expect(screen.getByText("20%")).toBeInTheDocument();
    });
});