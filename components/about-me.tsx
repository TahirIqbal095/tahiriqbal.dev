import {
  Card,
  CardContent,
  CardHeader,
  CardLabel,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { aboutConfig } from "@/config/about";

export default function AboutMe() {
  return (
    <Card className="p-2 h-full">
      <CardHeader>
        <div className="flex justify-between items-center mb-1 text-xs">
          <CardTitle>{aboutConfig.title}</CardTitle>
          <CardLabel>{aboutConfig.label}</CardLabel>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <p>{aboutConfig.description}</p>
      </CardContent>
    </Card>
  );
}
