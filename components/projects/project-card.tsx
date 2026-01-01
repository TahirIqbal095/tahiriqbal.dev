"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "next-view-transitions";
import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div className="group bg-card flex h-full flex-col rounded-md border">
      {/* Image Container */}
      <div className="bg-muted/20 relative aspect-video w-full overflow-hidden rounded-t-md border-b">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Status Badge - Overlay */}
        <div className="absolute top-3 right-3 z-10">
          {project.isWorking ? (
            <div className="bg-background/90 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium text-emerald-600 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Operational
            </div>
          ) : (
            <div className="bg-background/90 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium text-amber-600 shadow-sm backdrop-blur-sm">
              <span className="block h-2 w-2 rounded-full bg-amber-500" />
              Building
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h2 className="group-hover:text-primary text-xl leading-none font-semibold tracking-tight transition-colors">
              {project.title}
            </h2>
            <div className="text-muted-foreground flex gap-2 text-[11px]">
              {project.subTitle}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.live && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    target="_blank"
                    href={project.live}
                    className="hover:bg-muted text-muted-foreground hover:text-foreground rounded-full p-2 transition-colors"
                  >
                    <Globe size={16} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Live Demo</TooltipContent>
              </Tooltip>
            )}
            {project.github ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    target="_blank"
                    href={project.github}
                    className="hover:bg-muted text-muted-foreground hover:text-foreground rounded-full p-2 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Source Code</TooltipContent>
              </Tooltip>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="hover:bg-muted text-muted-foreground hover:text-foreground rounded-full p-2 transition-colors">
                    <Github size={16} />
                  </span>
                </TooltipTrigger>
                <TooltipContent>Private Repository</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground line-clamp-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="border-border/50 mt-auto flex items-center justify-between border-t pt-4">
          {/* Tech Stack */}
          <div className="flex items-center -space-x-2 transition-all hover:space-x-1">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <div className="bg-background z-0 rounded-full border p-1.5 shadow-sm transition-all hover:z-10 hover:scale-110">
                    <div className="text-muted-foreground h-4 w-4 grayscale transition-all hover:grayscale-0">
                      {tech.icon}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>{tech.name}</TooltipContent>
              </Tooltip>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-muted-foreground/60 pl-3 text-[10px]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {project.details && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hover:text-primary group/btn gap-1 pr-0 text-xs font-medium hover:bg-transparent"
            >
              <Link href={project.projectDetailsPageSlug}>
                Details
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
