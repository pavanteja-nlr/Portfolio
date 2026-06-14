import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";
import { PROJECTS } from "../data";

describe("Projects", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument();
  });

  it("renders each project title", () => {
    render(<Projects />);
    PROJECTS.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it("renders featured badge for featured projects", () => {
    render(<Projects />);
    const featured = PROJECTS.filter((p) => p.featured);
    if (featured.length > 0) {
      expect(screen.getByText("Featured")).toBeInTheDocument();
    }
  });

  it("renders tech stack for each project", () => {
    render(<Projects />);
    PROJECTS.forEach((project) => {
      project.stack.forEach((tech) => {
        expect(screen.getByText(tech)).toBeInTheDocument();
      });
    });
  });

  it("renders contributions list", () => {
    render(<Projects />);
    PROJECTS.forEach((project) => {
      project.contributions.forEach((line) => {
        expect(screen.getByText(line)).toBeInTheDocument();
      });
    });
  });

  it("renders GitHub link for each project", () => {
    render(<Projects />);
    const viewCodeLinks = screen.getAllByRole("link", { name: /view code/i });
    expect(viewCodeLinks.length).toBe(PROJECTS.length);
    viewCodeLinks.forEach((link, i) => {
      expect(link).toHaveAttribute("href", PROJECTS[i].github);
      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  it("renders project image when available", () => {
    render(<Projects />);
    const withImage = PROJECTS.filter((p) => p.image);
    if (withImage.length > 0) {
      const imgs = screen.getAllByRole("img");
      expect(imgs.length).toBeGreaterThanOrEqual(withImage.length);
    }
  });

  it("has the correct section id", () => {
    render(<Projects />);
    expect(document.getElementById("projects")).toBeInTheDocument();
  });
});
