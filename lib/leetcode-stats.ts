import { LeetcodeStats } from "@/types/leetcode";

export async function leetcodeStats(): Promise<LeetcodeStats> {
  const data = await fetch(
    "https://leetcode-stats-api.herokuapp.com/tahiriqbal095"
  );
  if (!data.ok) {
    throw new Error("Failed to fetch leetcode stats");
  }

  return data.json();
}
