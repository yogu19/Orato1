import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mic, Brain, Users } from "lucide-react";
import { Link } from "wouter";

const programs = [
  {
    icon: MessageCircle,
    title: "Communication Skills",
    description: "Master effective communication for academic and personal success",
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Build confidence in presenting ideas and speaking to audiences",
  },
  {
    icon: Brain,
    title: "Emotional Intelligence",
    description: "Develop self-awareness and empathy for better relationships",
  },
  {
    icon: Users,
    title: "Teamwork & Leadership",
    description: "Learn collaboration and leadership skills for future success",
  },
];

export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4" data-testid="heading-programs">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive skill development across key domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 hover-elevate transition-all"
                data-testid={`card-program-${index}`}
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-muted-foreground">{program.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild data-testid="button-explore-programs">
            <Link href="/programs">Explore All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
