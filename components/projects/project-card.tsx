"use client";

import Image from "next/image";
import { ArrowRight, Github, Globe } from "lucide-react";
import { IconWrapper } from "../common/icon-wrapper";
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-lg overflow-hidden border h-full"
    >
      <div>
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={700}
          loading="lazy"
          className="rounded-t-lg object-cover"
        />
      </div>

      <div className="p-2 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <div className="flex items-center gap-3">
              {project.live && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a target="_blank" href={project.live}>
                      <IconWrapper>
                        <Globe size={20} />
                      </IconWrapper>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {project.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a target="_blank" href={project.github}>
                      <IconWrapper>
                        <Github size={20} />
                      </IconWrapper>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm md:text-base">Technologies</h3>
          <div className="flex items-center">
            {project.technologies.map((technology, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size={"icon"}>
                    {technology.icon}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{technology.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          {project.isWorking ? (
            <p className="items-center gap-2 text-xs text-black/90 shadow bg-green-100 inline-flex px-2 py-1 rounded">
              <span className="h-2 w-2 rounded-full bg-green-500" /> All System
              Operational
            </p>
          ) : (
            <div>
              <p className="items-center gap-2 text-xs text-black/90 shadow bg-red-100 inline-flex px-2 py-1 rounded">
                <span className="h-2 w-2 rounded-full bg-red-500" /> Building
              </p>
            </div>
          )}

          {project.details && (
            <Button asChild variant={"link"}>
              <Link
                href={project.projectDetailsPageSlug}
                className="flex items-center gap-2"
              >
                view Details
                <ArrowRight />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
