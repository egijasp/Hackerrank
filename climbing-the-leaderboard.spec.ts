import { climbingLeaderboard } from "./climbing-the-leaderboard";

describe("climbingLeaderboard", () => {
  it("test1", () => {
    const result = climbingLeaderboard(
      [100, 90, 90, 80, 75, 60],
      [50, 65, 77, 90, 102]
    );

    expect(result).toEqual([6, 5, 4, 2, 1]);
  });

  it("test2", () => {
    const result = climbingLeaderboard(
      [100, 100, 50, 40, 40, 20, 10],
      [5, 25, 50, 120]
    );

    expect(result).toEqual([6, 4, 2, 1]);
  });
  it("test3", () => {
    const result = climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);

    expect(result).toEqual([4, 3, 1]);
  });
});
