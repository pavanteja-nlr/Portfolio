import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hero from "../components/Hero";

describe("Hero", () => {
  it("renders the site name heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the title and tagline", () => {
    render(<Hero />);
    expect(screen.getByText(/aspiring data analyst/i)).toBeInTheDocument();
  });

  it("renders 'Open to internships' badge when enabled", () => {
    render(<Hero />);
    expect(screen.getByText(/open to internships/i)).toBeInTheDocument();
  });

  it("renders the profile photo", () => {
    render(<Hero />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/pavan.png");
  });

  it("hides photo when image fails to load", () => {
    render(<Hero />);
    const img = screen.getByRole("img");
    act(() => {
      fireEvent.error(img);
    });
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders 'View projects' link", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /view projects/i })
    ).toHaveAttribute("href", "#projects");
  });

  it("renders download resume button", () => {
    render(<Hero />);
    expect(
      screen.getByRole("button", { name: /download resume/i })
    ).toBeInTheDocument();
  });

  it("download resume triggers fetch and creates download link", async () => {
    const user = userEvent.setup();
    const mockBlob = new Blob(["pdf"], { type: "application/pdf" });
    const mockUrl = "blob:http://localhost/fake";

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      blob: () => Promise.resolve(mockBlob),
    });
    global.URL.createObjectURL = vi.fn().mockReturnValue(mockUrl);
    global.URL.revokeObjectURL = vi.fn();

    render(<Hero />);
    const btn = screen.getByRole("button", { name: /download resume/i });
    await user.click(btn);

    expect(global.fetch).toHaveBeenCalledWith("/resume.pdf");
    expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockUrl);
  });

  it("falls back to window.open when fetch fails", async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockRejectedValue(new Error("Not found"));
    global.window.open = vi.fn();

    render(<Hero />);
    const btn = screen.getByRole("button", { name: /download resume/i });
    await user.click(btn);

    expect(global.window.open).toHaveBeenCalledWith(
      "/resume.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  });
});
