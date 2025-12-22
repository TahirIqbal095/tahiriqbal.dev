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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group flex flex-col h-full bg-card rounded-md border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-md aspect-video w-full border-b bg-muted/20">
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
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border shadow-sm text-[10px] font-medium text-emerald-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Operational
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border shadow-sm text-[10px] font-medium text-amber-600">
              <span className="block h-2 w-2 rounded-full bg-amber-500" />
              Building
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight leading-none group-hover:text-primary transition-colors">
              {project.title}
            </h2>
            <div className="flex gap-2 text-muted-foreground/50">
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
                    className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
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
                    className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Source Code</TooltipContent>
              </Tooltip>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={16} />
                  </span>
                </TooltipTrigger>
                <TooltipContent>Private Repository</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
          {/* Tech Stack */}
          <div className="flex items-center -space-x-2 hover:space-x-1 transition-all">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <div className="bg-background rounded-full p-1.5 border shadow-sm z-0 hover:z-10 transition-all hover:scale-110">
                    <div className="h-4 w-4 text-muted-foreground grayscale hover:grayscale-0 transition-all">
                      {tech.icon}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>{tech.name}</TooltipContent>
              </Tooltip>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] text-muted-foreground/60 pl-3">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {project.details && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-xs font-medium hover:bg-transparent hover:text-primary pr-0 gap-1 group/btn"
            >
              <Link href={project.projectDetailsPageSlug}>
                Details
                <ArrowUpRight
                  size={14}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
