export interface LeetcodeStats {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}
export async function leetcodeStats(): Promise<LeetcodeStats> {
  const data = await fetch(
    "https://leetcode-stats-api.herokuapp.com/tahiriqbal095",
    { cache: "force-cache" }
  );
  if (!data.ok) {
    throw new Error("Failed to fetch leetcode stats");
  }

  return data.json();
}
