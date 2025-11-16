import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, MessageCircle, BookOpen, Target, Heart, Monitor, Clock, Award, Gift, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const courses = [
  {
    title: "Basic",
    price: "Free",
    subtitle: "Perfect for getting started",
    features: [
      "Access to all course videos",
      "Basic progress tracking",
      "Community forum access",
      "Monthly newsletters",
    ],
    buttonText: "Get Started Free",
  },
  {
    title: "Premium",
    price: "₹499",
    priceUnit: "/month",
    subtitle: "Complete learning experience",
    features: [
      "Everything in Basic",
      "Physical activity kits delivered home",
      "1-on-1 mentorship sessions",
      "Priority support",
      "Exclusive workshops",
      "Premium certification",
      "Downloadable resources",
      "Quarterly gifts & rewards",
    ],
    popular: true,
    buttonText: "Subscribe Now",
  },
];

const exploreCourses = [
  {
    icon: MessageCircle,
    title: "Soft Skills & Communication",
    description: "Master effective communication for success in all areas of life",
    duration: "12 weeks",
    level: "Beginner to Advanced",
  },
  {
    icon: BookOpen,
    title: "Financial Literacy for Teens",
    description: "Learn essential money management skills for financial independence",
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    icon: Target,
    title: "Robotics & Innovation",
    description: "Hands-on technology projects and creative problem-solving",
    duration: "16 weeks",
    level: "Intermediate",
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Develop self-awareness and empathy for better relationships",
    duration: "10 weeks",
    level: "All Levels",
  },
  {
    icon: Monitor,
    title: "Digital Literacy",
    description: "Navigate the digital world safely and responsibly",
    duration: "6 weeks",
    level: "Beginner",
  },
  {
    icon: Clock,
    title: "Career Awareness",
    description: "Explore career paths and develop professional skills",
    duration: "8 weeks",
    level: "All Levels",
  },
];

const gamifiedFeatures = [
  {
    icon: Award,
    title: "Points & Badges",
    description: "Earn points for completing lessons and unlock achievement badges",
  },
  {
    icon: Gift,
    title: "Rewards System",
    description: "Redeem points for exciting gifts and learning materials",
  },
  {
    icon: CheckCircle2,
    title: "Certificates",
    description: "Get certified upon course completion to showcase your skills",
  },
];

export default function Courses() {
  const [enrollmentData, setEnrollmentData] = useState({
    studentName: "",
    grade: "",
    parentEmail: "",
    phone: "",
  });

  const handleEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enrollment submitted:", enrollmentData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-courses">
              Choose Your Plan
            </h1>
            <p className="text-lg text-muted-foreground">
              Flexible options for every learner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`p-8 hover-elevate transition-all relative ${
                  course.popular ? "border-primary" : ""
                }`}
                data-testid={`card-course-${index}`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-3 text-center">{course.title}</h3>
                <div className="text-center mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {course.price}
                  </span>
                  {course.priceUnit && (
                    <span className="text-primary">{course.priceUnit}</span>
                  )}
                </div>
                <p className="text-muted-foreground text-center mb-8 text-sm">{course.subtitle}</p>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full"
                  variant={course.popular ? "default" : "outline"}
                  data-testid={`button-select-${index}`}
                >
                  {course.buttonText}
                </Button>
              </Card>
            ))}
          </div>

          {/* Explore Our Courses Section */}
          <div className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Explore Our Courses</h2>
              <p className="text-lg text-muted-foreground">Comprehensive programs for holistic development</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {exploreCourses.map((course, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all"
                  data-testid={`card-explore-${index}`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <course.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Level:</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    data-testid={`button-learn-more-${index}`}
                  >
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Gamified Learning Experience Section */}
          <div className="py-12 mb-16">
            <Card className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Gamified Learning Experience</h2>
                <p className="text-lg text-muted-foreground">Make learning fun with rewards, badges, and certificates</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {gamifiedFeatures.map((feature, index) => (
                  <div key={index} className="text-center" data-testid={`gamified-${index}`}>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-12 md:p-16 bg-card border">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Access Your Dashboard</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Already enrolled? Log in to continue your learning journey
                </p>
                <Link href="/student-portal">
                  <Button 
                    className="font-semibold px-8"
                    variant="default"
                    data-testid="button-student-login"
                  >
                    Student Login
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
