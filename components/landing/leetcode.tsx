"use client";

import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { LeetcodeStats, LeetCodeSubmission } from "@/types/leetcode";

interface Props {
  stats: LeetcodeStats;
  submissions: LeetCodeSubmission[] | null;
}

export function LeetcodeStatsCard({ stats, submissions }: Props) {
  // Calculate segments for the donut chart
  const totalQuestions = stats?.totalQuestions || 1;

  const totalEasy = stats?.totalEasy || 1;
  const totalMedium = stats?.totalMedium || 1;
  const totalHard = stats?.totalHard || 1;

  const easySolved = stats?.easySolved || 0;
  const mediumSolved = stats?.mediumSolved || 0;
  const hardSolved = stats?.hardSolved || 0;

  // Angles in degrees (relative to 360)
  const easyAngle = (totalEasy / totalQuestions) * 360;
  const mediumAngle = (totalMedium / totalQuestions) * 360;
  const hardAngle = (totalHard / totalQuestions) * 360;

  const easySolvedAngle = (easySolved / totalQuestions) * 360;
  const mediumSolvedAngle = (mediumSolved / totalQuestions) * 360;
  const hardSolvedAngle = (hardSolved / totalQuestions) * 360;

  return (
    <Card className="relative space-y-2">
      <a
        href={"https://leetcode.com/u/tahiriqbal095"}
        className="absolute inset-0 z-10 cursor-pointer"
        target="_blank"
      />
      <CardHeader className="relative pb-0">
        <div className="mb-1 flex items-center justify-between">
          <CardTitle className="text-muted-foreground flex items-center gap-2 font-medium">
            <Trophy className="h-3 w-3 text-[#FFA116]" />
            <span>LeetCode Stats</span>
          </CardTitle>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-muted-foreground/50 font-mono text-xs"
          >
            tahiriqbal095
          </motion.div>
        </div>
        <Separator />
      </CardHeader>

      <CardContent className="relative flex h-full flex-col justify-between pt-2">
        <div className="mt-4 flex items-center justify-between">
          {/* Donut Chart Area */}
          <div className="relative flex h-32 w-32 items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full -rotate-90 transform"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="text-secondary/20"
              />

              {/* Easy Segment */}
              <DonutSegment
                startAngle={0}
                angle={easyAngle}
                solvedAngle={easySolvedAngle}
                color="text-chart-2" // Green/Teal
                radius={45}
                stroke={6}
                delay={0.2}
              />

              {/* Medium Segment */}
              <DonutSegment
                startAngle={easyAngle}
                angle={mediumAngle}
                solvedAngle={mediumSolvedAngle}
                color="text-chart-4" // Yellow
                radius={45}
                stroke={6}
                delay={0.3}
              />

              {/* Hard Segment */}
              <DonutSegment
                startAngle={easyAngle + mediumAngle}
                angle={hardAngle}
                solvedAngle={hardSolvedAngle}
                color="text-chart-1" // Red
                radius={45}
                stroke={6}
                delay={0.4}
              />
            </svg>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{stats?.totalSolved}</span>
              <span className="text-muted-foreground text-[10px] uppercase">
                Solved
              </span>
            </div>
          </div>

          {/* Legend / Stats */}
          <div className="flex min-w-[120px] flex-col justify-center gap-3">
            <LegendItem
              label="Easy"
              count={easySolved}
              total={stats?.totalEasy || 0}
              color="bg-[var(--chart-2)]"
            />
            <LegendItem
              label="Medium"
              count={mediumSolved}
              total={stats?.totalMedium || 0}
              color="bg-[var(--chart-4)]"
            />
            <LegendItem
              label="Hard"
              count={hardSolved}
              total={stats?.totalHard || 0}
              color="bg-[var(--chart-1)]"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-4">
        <h3 className="text-sm">Recent Submissions</h3>
        {submissions && <SubmissionTicker submissions={submissions} />}
      </CardFooter>
    </Card>
  );
}

function DonutSegment({
  startAngle,
  angle,
  solvedAngle,
  radius,
  stroke,
  color,
  delay,
}: any) {
  if (angle <= 0) return null;

  const circumference = 2 * Math.PI * radius;

  // Background Segment (Total)
  const GAP_DEGREES = 15; // Gap between segments
  const effectiveAngle = Math.max(0, angle - GAP_DEGREES);

  const segmentLength = (effectiveAngle / 360) * circumference;
  const gapLength = circumference - segmentLength;

  // Foreground Segment
  const effectiveSolvedAngle = Math.min(solvedAngle, effectiveAngle);
  const solvedSegmentLength = (effectiveSolvedAngle / 360) * circumference;
  const solvedGapLength = circumference - solvedSegmentLength;

  return (
    <>
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        className={`${color} opacity-20`}
        transform={`rotate(${startAngle + GAP_DEGREES / 2}, 50, 50)`}
        initial={{ strokeDasharray: `0 ${circumference}`, opacity: 0 }}
        animate={{
          strokeDasharray: `${segmentLength} ${gapLength}`,
          opacity: 0.2,
        }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />

      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        className={`${color} cursor-pointer`}
        transform={`rotate(${startAngle + GAP_DEGREES / 2}, 50, 50)`}
        initial={{ strokeDasharray: `0 ${circumference}`, opacity: 0 }}
        animate={{
          strokeDasharray: `${solvedSegmentLength} ${solvedGapLength}`,
          opacity: 1,
        }}
        whileHover={{ scale: 1.1, strokeWidth: stroke + 2, zIndex: 10 }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
      />
    </>
  );
}

function LegendItem({
  label,
  count,
  total,
  color,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
}) {
  return (
    <div className="flex w-full items-center justify-between text-xs">
      <div className="flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full ${color}`} />
        <span className="text-muted-foreground font-medium">{label}</span>
      </div>
      <div className="font-mono">
        <span className="text-foreground font-semibold">{count}</span>
        <span className="text-muted-foreground/50">/{total}</span>
      </div>
    </div>
  );
}

function SubmissionTicker({
  submissions,
}: {
  submissions: LeetCodeSubmission[];
}) {
  if (!submissions.length) return null;

  const tickerItems = [...submissions, ...submissions].filter(
    (sub) => sub.statusDisplay === "Accepted"
  );

  return (
    <div className="relative mt-2 h-16 w-full overflow-hidden">
      {/* Gradient Masks */}
      <div className="from-card pointer-events-none absolute top-0 right-0 left-0 z-10 h-4 bg-linear-to-b to-transparent" />
      <div className="from-card pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-4 bg-linear-to-t to-transparent" />
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="mt-2 flex flex-col gap-2 py-2"
      >
        {tickerItems.map((sub, i) => (
          <div
            key={`${sub.titleSlug}-${i}`}
            className="flex items-center justify-between px-4 text-[10px]"
          >
            <span className="text-muted-foreground max-w-[150px] truncate font-medium">
              {sub.title}
            </span>
            <div className="flex items-center gap-2 opacity-80">
              <span
                className={`rounded px-1.5 py-0.5 ${
                  sub.statusDisplay === "Accepted"
                    ? "bg-green-500/10 text-green-600"
                    : "bg-red-500/10 text-red-600"
                }`}
              >
                {sub.statusDisplay}
              </span>
              <span className="text-muted-foreground/50">{sub.lang}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
