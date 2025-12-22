import {
  Card,
  CardContent,
  CardHeader,
  CardLabel,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { aboutConfig } from "@/config/about";
import { EncryptedText } from "../ui/encrypted-text";

export default function AboutMe() {
  const staticText = aboutConfig.description.slice(0, 180);
  const encryptedText = aboutConfig.description.slice(
    180,
    aboutConfig.description.length
  );
  return (
    <Card className="h-full leading-6">
      <CardHeader>
        <div className="mb-1 flex items-center justify-between text-xs">
          <CardTitle>{aboutConfig.title}</CardTitle>
          <CardLabel>{aboutConfig.label}</CardLabel>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <p className="text-primary font-medium">
          {staticText} <EncryptedText text={encryptedText} />
        </p>
      </CardContent>
    </Card>
  );
}
