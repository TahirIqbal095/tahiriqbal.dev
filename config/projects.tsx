import ReactIcon from "@/components/technologies/ReactIcon";
import Shadcn from "@/components/technologies/Shadcn";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "LeetAid",
    description:
      "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
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
    title: "LeetAid",
    description:
      "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
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
    details: true,
    projectDetailsPageSlug: "/projects/leetaid",
    isWorking: false,
  },
];
