import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Trophy, Building2, DollarSign } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Hybrid Learning Model",
    description: "Combine offline workshops with online courses",
  },
  {
    icon: Users,
    title: "Certified Trainers",
    description: "Expert educators with proven track records",
  },
  {
    icon: Trophy,
    title: "Reward-Based Learning",
    description: "Gamified approach with certificates and badges",
  },
  {
    icon: Building2,
    title: "School Partnerships",
    description: "Seamless integration with school curricula",
  },
  {
    icon: DollarSign,
    title: "Affordable Plans",
    description: "Flexible pricing for schools and individuals",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4" data-testid="heading-why-choose">
            Why Choose Orato
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 hover-elevate transition-all"
                data-testid={`card-feature-${index}`}
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-accent/50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
