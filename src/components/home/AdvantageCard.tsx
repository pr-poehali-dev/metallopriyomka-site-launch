
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const AdvantageCard = ({ title, description, icon }: AdvantageCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-primary/10">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvantageCard;
