import Bun from "@/components/technologies/Bun";
import NextJs from "@/components/technologies/NextJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import ReactIcon from "@/components/technologies/ReactIcon";
import Shadcn from "@/components/technologies/Shadcn";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "LeetAid",
    subTitle: "Chrome Extension for Leetcode",
    description:
      "A Chrome extension that provides tailored hints for coding problems on Leetcode, empowering users to solve problems while preserving their creativity and intuition.",
    image: "/projects/leetaid.png",
    link: "https://leetaid-landing-page.vercel.app/",
    technologies: [
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
    ],
    github: "https://github.com/tahiriqbal095/leetaid",
    live: "https://leetaid-landing-page.vercel.app/",
    details: false,
    projectDetailsPageSlug: "/projects/leetaid",
    isWorking: true,
  },
  {
    title: "Mockverse",
    subTitle: "AI preparation platform for competitive exams",
    description:
      "Mockverse is an AI-powered web application that helps students prepare for competitive exams by providing them with mock tests and personalized feedback.",
    image: "/projects/mockverse.png",
    link: "https://mockverse-client-bdzf.vercel.app/",
    technologies: [
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "Bun", icon: <Bun key="bun" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgresql" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
    ],
    github: "",
    live: "https://mockverse-client-bdzf.vercel.app/",
    details: false,
    projectDetailsPageSlug: "/projects/mockverse",
    isWorking: false,
  },
];
