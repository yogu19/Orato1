import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download } from "lucide-react";
import { Link } from "wouter";

const offlineSteps = [
  {
    number: "1",
    title: "3-Month Trial",
    description: "Initial pilot program to assess student engagement and learning outcomes",
  },
  {
    number: "2",
    title: "Feedback & Evaluation",
    description: "Comprehensive review with school administration and parents",
  },
  {
    number: "3",
    title: "Annual Collaboration",
    description: "Long-term partnership with customized curriculum integration",
  },
  {
    number: "4",
    title: "Books & Kits",
    description: "Physical learning materials and activity kits for hands-on learning",
  },
  {
    number: "5",
    title: "Revenue Sharing",
    description: "Transparent profit-sharing model benefiting both school and Orato",
  },
];

const onlinePrograms = [
  {
    title: "Soft Skills & Communication",
    description: "Master verbal and non-verbal communication for academic and social success",
    topics: ["Public Speaking", "Active Listening", "Presentation Skills"],
  },
  {
    title: "Financial Literacy for Teens",
    description: "Essential money management skills for young minds",
    topics: ["Budgeting Basics", "Saving Strategies", "Smart Spending"],
  },
  {
    title: "Robotics & Innovation",
    description: "Hands-on technology and creative problem-solving",
    topics: ["Basic Robotics", "Design Thinking", "Innovation Projects"],
  },
  {
    title: "Emotional Intelligence",
    description: "Develop self-awareness and empathy for better relationships",
    topics: ["Self-Regulation", "Empathy Building", "Social Skills"],
  },
  {
    title: "Digital Literacy",
    description: "Navigate the digital world safely and effectively",
    topics: ["Online Safety", "Digital Tools", "Cyber Awareness"],
  },
  {
    title: "Career Awareness",
    description: "Explore career paths and develop goal-setting skills",
    topics: ["Career Exploration", "Goal Setting", "Time Management"],
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-programs-page">
              Skill Development Tracks
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive offline and online programs designed to build essential life skills
            </p>
          </div>
        </section>

        {/* Offline Programs */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <Card className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold mb-4">Offline Programs</h2>
                <p className="text-lg text-muted-foreground">School Collaboration Model</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
                {offlineSteps.map((step, index) => (
                  <Card
                    key={index}
                    className="p-6 hover-elevate transition-all"
                    data-testid={`card-offline-step-${index}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2" data-testid="text-pricing">₹1,800 – ₹2,000</div>
                <p className="text-muted-foreground mb-6" data-testid="text-pricing-desc">per student annually</p>
                <Button size="lg" asChild data-testid="button-book-trial">
                  <Link href="/schools">Book a Trial Program</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Online Programs */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-4">Online Programs</h2>
              <p className="text-lg text-muted-foreground">Learn Anytime, Anywhere</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {onlinePrograms.map((program, index) => (
                <Card
                  key={index}
                  className="p-8 hover-elevate transition-all"
                  data-testid={`card-online-program-${index}`}
                >
                  <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" asChild data-testid="button-view-courses">
                <Link href="/courses">View Course Details</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Download Brochure */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Card className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-semibold mb-4">Download Program Brochure</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get detailed information about all our programs, pricing, and curriculum in a comprehensive PDF brochure
              </p>
              <Button size="lg" data-testid="button-download-brochure" onClick={() => console.log("Download brochure")}>
                <Download className="w-5 h-5 mr-2" />
                Download Brochure (PDF)
              </Button>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
