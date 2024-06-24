import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import EditMCQ from "./EditMCQ";

// Mock the updateMCQ function
vi.mock("../utils", () => ({
  updateMCQ: vi.fn(), // Assuming updateMCQ returns a Promise
}));

describe("EditMCQ component", () => {
  it("renders with correct initial values", () => {
    const mcq = {
      id: "1",
      question: "Sample question",
      options: ["Option 1", "Option 2"],
      correctOption: "Option 1",
      problemId: "problem1",
    };
    let setIsUpdate = vi.fn();
    render(<EditMCQ mcq={mcq} setIsUpdate={setIsUpdate} />);

    const editBtn = screen.getByRole("button", { name: "Edit" });
    expect(editBtn).toBeInTheDocument();
  });
});
