import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /about me/i })
    ).toBeInTheDocument();
  });

  it("renders about paragraphs", () => {
    render(<About />);
    expect(screen.getByText(/AI & ML student/i)).toBeInTheDocument();
    expect(screen.getByText(/passionate about data analysis/i)).toBeInTheDocument();
  });

  it("renders the education card", () => {
    render(<About />);
    expect(screen.getByText(/education/i)).toBeInTheDocument();
    expect(screen.getByText(/B\.Tech AI & ML/i)).toBeInTheDocument();
  });

  it("renders the focus card", () => {
    render(<About />);
    expect(screen.getByText("Focus")).toBeInTheDocument();
    expect(
      screen.getByText(/data analysis, eda, and applied machine learning/i)
    ).toBeInTheDocument();
  });

  it("has the correct section id", () => {
    render(<About />);
    expect(document.getElementById("about")).toBeInTheDocument();
  });
});
