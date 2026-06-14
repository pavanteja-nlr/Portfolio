import { describe, it, expect } from "vitest";
import { SITE, ABOUT, SKILLS, PROJECTS } from "../data";

describe("data.js exports", () => {
  describe("SITE", () => {
    it("has required fields", () => {
      expect(SITE.name).toBeDefined();
      expect(SITE.title).toBeDefined();
      expect(SITE.tagline).toBeDefined();
      expect(SITE.email).toBeDefined();
      expect(SITE.linkedin).toBeDefined();
      expect(SITE.github).toBeDefined();
    });

    it("email is a mailto link", () => {
      expect(SITE.email).toMatch(/^mailto:/);
    });

    it("linkedin is a valid URL", () => {
      expect(SITE.linkedin).toMatch(/^https:\/\/www\.linkedin\.com/);
    });

    it("github is a valid URL", () => {
      expect(SITE.github).toMatch(/^https:\/\/github\.com/);
    });

    it("resumePath starts with a slash", () => {
      expect(SITE.resumePath).toMatch(/^\//);
    });

    it("has a profilePhoto path", () => {
      expect(SITE.profilePhoto).toBeDefined();
      expect(typeof SITE.profilePhoto).toBe("string");
    });
  });

  describe("ABOUT", () => {
    it("has paragraphs array with at least two entries", () => {
      expect(Array.isArray(ABOUT.paragraphs)).toBe(true);
      expect(ABOUT.paragraphs.length).toBeGreaterThanOrEqual(2);
    });

    it("paragraphs are non-empty strings", () => {
      ABOUT.paragraphs.forEach((p) => {
        expect(typeof p).toBe("string");
        expect(p.length).toBeGreaterThan(0);
      });
    });
  });

  describe("SKILLS", () => {
    it("is a non-empty array", () => {
      expect(Array.isArray(SKILLS)).toBe(true);
      expect(SKILLS.length).toBeGreaterThan(0);
    });

    it("each skill has name and icon", () => {
      SKILLS.forEach((skill) => {
        expect(skill.name).toBeDefined();
        expect(typeof skill.name).toBe("string");
        expect(skill.icon).toBeDefined();
        expect(typeof skill.icon).toBe("string");
      });
    });
  });

  describe("PROJECTS", () => {
    it("is a non-empty array", () => {
      expect(Array.isArray(PROJECTS)).toBe(true);
      expect(PROJECTS.length).toBeGreaterThan(0);
    });

    it("each project has required fields", () => {
      PROJECTS.forEach((project) => {
        expect(project.id).toBeDefined();
        expect(project.title).toBeDefined();
        expect(project.problem).toBeDefined();
        expect(Array.isArray(project.stack)).toBe(true);
        expect(Array.isArray(project.contributions)).toBe(true);
        expect(project.github).toMatch(/^https:\/\/github\.com/);
      });
    });

    it("featured project has image field", () => {
      const featured = PROJECTS.filter((p) => p.featured);
      featured.forEach((p) => {
        expect(p.image).toBeDefined();
      });
    });
  });
});
