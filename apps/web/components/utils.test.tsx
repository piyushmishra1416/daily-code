import { describe, it, expect, vi, beforeEach } from "vitest";
import prismaClient from "../../../__mocks__/db";
import { ProblemType } from "@prisma/client";
import { getProblem } from "./utils";

describe("getProblem", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return null if problemId is null", async () => {
    const result = await getProblem(null);
    expect(result).toBeNull();
  });

  it("should return problem data if problemId is valid", async () => {
    const mockProblem = {
      id: "1",
      title: "Sample Problem",
      description: "This is a sample problem description.",
      notionDocId: "notion-123",
      type: ProblemType.Code,
      problemStatement: {
        id: "1",
        testCases: [],
        languagesSupported: [],
      },
    };

    prismaClient.problem.findUnique.mockResolvedValue(mockProblem);

    const result = await getProblem("1");
    expect(result).toEqual(mockProblem);
  });

  it("should return null if problem is not found", async () => {
    prismaClient.problem.findUnique.mockResolvedValue(null);

    const result = await getProblem("1");
    expect(result).toBeNull();
  });

  it("should return null if there is an error", async () => {
    prismaClient.problem.findUnique.mockRejectedValue(new Error("Database error"));

    const result = await getProblem("1");
    expect(result).toBeNull();
  });
});
