import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Orato's program transformed our students' confidence and communication abilities.",
    name: "Principal Sharma",
    role: "Principal",
    organization: "ABC International School",
    initials: "PS",
  },
  {
    quote: "My daughter's presentation skills improved dramatically after joining Orato.",
    name: "Mrs. Patel",
    role: "Parent",
    organization: "",
    initials: "MP",
  },
  {
    quote: "The workshops are fun and I learned how to speak without being nervous!",
    name: "Rahul, Class 9",
    role: "Student",
    organization: "",
    initials: "R",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4" data-testid="heading-testimonials">
            What People Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover-elevate transition-all"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <blockquote className="text-lg mb-6 text-foreground">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                    {testimonial.organization && (
                      <>
                        <br />
                        {testimonial.organization}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
