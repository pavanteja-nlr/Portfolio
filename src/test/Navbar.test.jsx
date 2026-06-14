import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders the site brand name", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /swarna/i })).toBeInTheDocument();
  });

  it("renders desktop nav links", () => {
    render(<Navbar />);
    const links = ["Home", "About", "Skills", "Projects", "Contact"];
    links.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1);
    });
  });

  it("renders the mobile menu button", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("button", { name: /open menu/i })
    ).toBeInTheDocument();
  });

  it("toggles mobile menu on button click", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const button = screen.getByRole("button", { name: /open menu/i });
    await user.click(button);

    // After opening, the button label should change to close
    expect(
      screen.getByRole("button", { name: /close menu/i })
    ).toBeInTheDocument();
  });

  it("closes mobile menu when a link is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // Open menu
    await user.click(screen.getByRole("button", { name: /open menu/i }));

    // Click a mobile link — after open, there are duplicate "About" links
    // (desktop + mobile); clicking either triggers setOpen(false)
    const mobileLinks = screen.getAllByText("About");
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2);
    await user.click(mobileLinks[mobileLinks.length - 1]);

    // Menu should close, button label should revert
    expect(
      screen.getByRole("button", { name: /open menu/i })
    ).toBeInTheDocument();
  });
});
