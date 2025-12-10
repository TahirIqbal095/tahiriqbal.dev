import {
  Card,
  CardContent,
  CardHeader,
  CardLabel,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { aboutConfig } from "@/config/about";
import { Badge } from "./ui/badge";
import { TypescriptIcon } from "@/components/svgs/typescript";
import { Bun } from "./svgs/bun";
import NextJs from "./svgs/nextjs";
import Postgresql from "./svgs/postgres";

export default function AboutMe() {
  return (
    <Card className="p-2 h-full leading-6">
      <CardHeader>
        <div className="flex justify-between items-center mb-1 text-xs">
          <CardTitle>{aboutConfig.title}</CardTitle>
          <CardLabel>{aboutConfig.label}</CardLabel>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <p>
          <span>I build interactive web apps using</span>
          <Badge>
            <TypescriptIcon size="1rem" />
            <span>Typescript</span>
          </Badge>
          <span>, </span>
          <Badge>
            <NextJs size="1rem" />
            <span>Next.js</span>
          </Badge>
          <span>, </span>
          <Badge>
            <Bun size="1rem" />
            <span>Bun</span>
          </Badge>
          <span> and </span>
          <Badge>
            <Postgresql size="1rem" />
            <span>Postgress</span>
          </Badge>
          <span>
            {" "}
            . With a focus on UI design. Enthusiastic about Agentic Web, Web3
          </span>
        </p>
      </CardContent>
    </Card>
  );
}
