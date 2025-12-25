import AboutMe from "@/components/landing/about-me";
import TimeCard from "@/components/landing/time-card";
import { CurrentStatus } from "@/components/landing/current-status";
import { ExperienceAndEdu } from "@/components/landing/experience-education";
import { LeetcodeStatsCard } from "@/components/landing/leetcode";
import { Projects } from "@/components/landing/projects";
import { leetcodeStats } from "@/lib/leetcode-stats";
import { BentoCard, BentoGrid } from "@/components/landing/bento-grid";
import { LeetCode } from "leetcode-query";
export default async function LandingPage() {
  const stats = await leetcodeStats();
  const leetcode = new LeetCode();
  const user = await leetcode.user("tahiriqbal095");

  return (
    <BentoGrid className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
      <BentoCard className="col-span-1">
        <TimeCard />
      </BentoCard>
      <BentoCard className="col-span-1">
        <CurrentStatus />
      </BentoCard>
      <BentoCard className="col-span-2 md:col-span-2 lg:col-span-2">
        <AboutMe />
      </BentoCard>
      <BentoCard className="col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2">
        <ExperienceAndEdu />
      </BentoCard>
      <BentoCard className="col-span-2 md:col-span-2 lg:col-span-4 lg:row-span-3">
        <Projects />
      </BentoCard>
      <BentoCard className="col-span-2 lg:col-span-2 lg:row-span-2">
        <LeetcodeStatsCard
          submissions={user.recentSubmissionList}
          stats={stats}
        />
      </BentoCard>
    </BentoGrid>
  );
}
