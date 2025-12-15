"use client";

import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { LeetcodeStats } from "@/lib/leetcode-stats";

export function Leetcode({ stats }: { stats: LeetcodeStats }) {
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
        className="absolute inset-0 cursor-pointer z-10"
        target="_blank"
      />
      <CardHeader className="pb-0 relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#FFA116]" />
            LeetCode Stats
          </CardTitle>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-xs font-mono text-muted-foreground/50"
          >
            tahiriqbal095
          </motion.div>
        </div>
      </CardHeader>

      <CardContent className="pt-2 h-full flex flex-col justify-between relative">
        <div className="flex items-center justify-between mt-4">
          {/* Donut Chart Area */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full transform -rotate-90"
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
              <span className="text-[10px] text-muted-foreground uppercase">
                Solved
              </span>
            </div>
          </div>

          {/* Legend / Stats */}
          <div className="flex flex-col gap-3 justify-center min-w-[120px]">
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
    <div className="flex items-center justify-between text-xs w-full">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${color}`} />
        <span className="text-muted-foreground font-medium">{label}</span>
      </div>
      <div className="font-mono">
        <span className="font-semibold text-foreground">{count}</span>
        <span className="text-muted-foreground/50">/{total}</span>
      </div>
    </div>
  );
}
