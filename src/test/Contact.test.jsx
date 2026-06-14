import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import { SITE } from "../data";

describe("Contact", () => {
  it("renders the section heading", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
  });

  it("renders email link", () => {
    render(<Contact />);
    const emailLink = screen.getByText(SITE.emailLabel).closest("a");
    expect(emailLink).toHaveAttribute("href", SITE.email);
  });

  it("renders LinkedIn link with target _blank", () => {
    render(<Contact />);
    const linkedinLink = screen.getByText(SITE.linkedinLabel).closest("a");
    expect(linkedinLink).toHaveAttribute("href", SITE.linkedin);
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders GitHub link with target _blank", () => {
    render(<Contact />);
    const githubLink = screen.getByText(SITE.githubLabel).closest("a");
    expect(githubLink).toHaveAttribute("href", SITE.github);
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("email link does not have target attribute", () => {
    render(<Contact />);
    const emailLink = screen.getByText(SITE.emailLabel).closest("a");
    expect(emailLink).not.toHaveAttribute("target");
  });

  it("renders all three contact items", () => {
    render(<Contact />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("has the correct section id", () => {
    render(<Contact />);
    expect(document.getElementById("contact")).toBeInTheDocument();
  });
});
