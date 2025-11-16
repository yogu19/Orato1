import { Lightbulb, MessageSquare, Heart } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    label: "Confidence",
  },
  {
    icon: MessageSquare,
    label: "Communication",
  },
  {
    icon: Heart,
    label: "Character",
  },
];

export default function Vision() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-8" data-testid="heading-vision">
            Our Vision
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            To make soft skills practical & accessible for every student. We
            believe in nurturing confidence and creativity through experiential
            learning that prepares students for tomorrow's challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="flex flex-col items-center"
                  data-testid={`pillar-${pillar.label.toLowerCase()}`}
                >
                  <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{pillar.label}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
