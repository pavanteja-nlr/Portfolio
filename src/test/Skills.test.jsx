import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "../components/Skills";
import { SKILLS } from "../data";

describe("Skills", () => {
  it("renders the section heading", () => {
    render(<Skills />);
    expect(
      screen.getByRole("heading", { name: /skills/i })
    ).toBeInTheDocument();
  });

  it("renders all skills from data", () => {
    render(<Skills />);
    SKILLS.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("renders skill items as a list", () => {
    render(<Skills />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(SKILLS.length);
  });

  it("each skill item has an aria-label", () => {
    render(<Skills />);
    SKILLS.forEach(({ name }) => {
      expect(screen.getByLabelText(name)).toBeInTheDocument();
    });
  });

  it("has the correct section id", () => {
    render(<Skills />);
    expect(document.getElementById("skills")).toBeInTheDocument();
  });
});
