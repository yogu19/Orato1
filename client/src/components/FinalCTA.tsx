import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-4" data-testid="heading-final-cta">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join hundreds of students building their confidence and skills with Orato
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="default" asChild data-testid="button-partner">
            <Link href="/schools">Partner With Us</Link>
          </Button>
          <Button size="lg" variant="outline" asChild data-testid="button-enroll-final">
            <Link href="/courses">Enroll Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
