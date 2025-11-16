import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Target, Lightbulb } from "lucide-react";
import workshop1 from "@assets/WhatsApp Image 2025-11-17 at 12.40.29 AM_1763326466385.jpeg";
import workshop2 from "@assets/WhatsApp Image 2025-11-17 at 12.42.25 AM_1763326530937.jpeg";
import workshop3 from "@assets/WhatsApp Image 2025-11-17 at 12.42.24 AM_1763326537886.jpeg";
import workshop4 from "@assets/image_1763326624681.png";
import workshop5 from "@assets/image_1763326673607.png";

const teamMembers = [
  {
    name: "Yamini",
    role: "Certified Trainer & Educator",
    description: "Passionate about empowering students with essential life skills through innovative teaching methods.",
    initials: "Y",
  },
  {
    name: "Sakshi",
    role: "Certified Trainer & Educator",
    description: "Passionate about empowering students with essential life skills through innovative teaching methods.",
    initials: "S",
  },
  {
    name: "Akshita",
    role: "Certified Trainer & Educator",
    description: "Passionate about empowering students with essential life skills through innovative teaching methods.",
    initials: "A",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Pilot Program",
    description: "Launched initial soft skills workshops",
  },
  {
    year: "2025",
    title: "Trial Phase",
    description: "Partnered with 2-3 schools for testing",
  },
  {
    year: "2026",
    title: "Expansion",
    description: "In Progress",
  },
];

const workshopImages = [
  { src: workshop1, alt: "Teachers workshop session" },
  { src: workshop2, alt: "Children with educational toys" },
  { src: workshop3, alt: "Child with building blocks" },
  { src: workshop4, alt: "Interactive children activities" },
  { src: workshop5, alt: "Children sharing meal together" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-about">
              Our Story & Vision
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Building a future where every student has access to quality soft skills education
            </p>
          </div>
        </section>

        {/* Mission and Vision Cards */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-8">
            <Card className="p-8 md:p-12" data-testid="card-mission">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold" data-testid="heading-mission">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-mission">
                Orato was founded on the belief that soft skills are just as important as academic knowledge. We recognized a critical gap in traditional education systems – students were excelling in textbooks but struggling with confidence, communication, and real-world interactions. Our mission is to bridge this gap through experiential, hybrid learning programs that make soft skills practical and accessible for every student.
              </p>
            </Card>

            <Card className="p-8 md:p-12" data-testid="card-vision">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold" data-testid="heading-vision-card">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-vision">
                To nurture confidence and creativity in every child through experiential learning. We envision a future where students from Tier-2 cities have equal access to world-class soft skills training, empowering them to succeed in an increasingly competitive world. Through our hybrid model, we're making quality education accessible and affordable.
              </p>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Passionate educators and trainers dedicated to student success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-8 text-center hover-elevate transition-all" data-testid={`card-team-${index}`}>
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-20 h-20">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-team-name-${index}`}>{member.name}</h3>
                  <p className="text-sm text-primary mb-3" data-testid={`text-team-role-${index}`}>{member.role}</p>
                  <p className="text-muted-foreground" data-testid={`text-team-desc-${index}`}>{member.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in our growth story
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block" />

              {/* Timeline items */}
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col`}
                    data-testid={`timeline-item-${index}`}
                  >
                    {/* Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Card className="p-8 hover-elevate transition-all" data-testid={`card-timeline-${index}`}>
                        <div className="text-5xl font-bold text-primary mb-4" data-testid={`text-year-${index}`}>
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-semibold mb-3" data-testid={`text-timeline-title-${index}`}>
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground" data-testid={`text-timeline-desc-${index}`}>
                          {item.description}
                        </p>
                      </Card>
                    </div>

                    {/* Dot on the line with connectors */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center">
                      {/* Horizontal connector line */}
                      <div 
                        className={`absolute w-12 h-0.5 bg-gray-300 dark:bg-gray-700 ${
                          index % 2 === 0 ? 'left-2 -translate-x-full' : 'right-2 translate-x-full'
                        }`}
                      />
                      {/* Center dot */}
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10" />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="w-full md:w-5/12 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Gallery */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-4">Our Impact in Action</h2>
              <p className="text-lg text-muted-foreground">
                Moments from our workshops and training sessions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workshopImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-lg overflow-hidden hover-elevate transition-all"
                  data-testid={`gallery-item-${index + 1}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
