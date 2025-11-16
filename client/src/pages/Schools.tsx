import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Users, TrendingUp, HeadphonesIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const benefits = [
  {
    icon: BookOpen,
    title: "Customized Curriculum",
    description: "Programs tailored to your school's needs and student demographics",
  },
  {
    icon: Users,
    title: "Expert Trainer Support",
    description: "Certified trainers with proven track records in soft skills education",
  },
  {
    icon: TrendingUp,
    title: "Profit Sharing Model",
    description: "Transparent revenue sharing that benefits both school and Orato",
  },
  {
    icon: HeadphonesIcon,
    title: "Complete Support",
    description: "From planning to execution, we handle everything seamlessly",
  },
];

const steps = [
  {
    number: "1",
    title: "Proposal",
    description: "Share your school's requirements and student count",
  },
  {
    number: "2",
    title: "Trial Program",
    description: "3-month pilot to assess fit and impact",
  },
  {
    number: "3",
    title: "Evaluation",
    description: "Comprehensive feedback from students and teachers",
  },
  {
    number: "4",
    title: "Annual Contract",
    description: "Long-term collaboration agreement",
  },
  {
    number: "5",
    title: "Student Kits",
    description: "Delivery of learning materials and activity books",
  },
];

const testimonials = [
  {
    quote: "Orato's program has transformed how our students communicate and present. The hybrid model fits perfectly with our curriculum.",
    name: "Principal Sharma",
    organization: "ABC International School",
    initials: "PS",
  },
  {
    quote: "The partnership has been seamless. Parents are extremely happy with the visible improvements in student confidence.",
    name: "Dr. Patel",
    organization: "Excellence Public School",
    initials: "DP",
  },
];

export default function Schools() {
  const [students, setStudents] = useState(50);
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    email: "",
    phone: "",
    city: "",
    numberOfStudents: "",
    additionalInfo: "",
  });

  const revenuePerStudent = 1900;
  const estimatedRevenue = students * revenuePerStudent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-muted-foreground" data-testid="heading-schools">
              Partner with <span className="text-foreground">Orato</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Empower your students with essential soft skills through our proven hybrid learning model
            </p>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-4">Why Partner With Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 hover-elevate transition-all text-center"
                    data-testid={`card-benefit-${index}`}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Simple steps to get started</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all text-center"
                  data-testid={`card-step-${index}`}
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Calculator */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Card className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold mb-4">Revenue Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Estimate potential revenue from partnering with Orato
                </p>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-4" data-testid="label-student-count">
                  Number of Students: {students}
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  data-testid="slider-students"
                />
              </div>

              <div className="text-center p-8 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2" data-testid="label-revenue">Estimated Annual Revenue</p>
                <div className="text-5xl font-bold text-primary mb-2" data-testid="text-revenue-amount">
                  ₹{estimatedRevenue.toLocaleString('en-IN')}
                </div>
                <p className="text-sm text-muted-foreground" data-testid="text-revenue-basis">
                  Based on ₹{revenuePerStudent.toLocaleString('en-IN')} per student per year
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-4">Partner Testimonials</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-8 hover-elevate transition-all"
                  data-testid={`card-partner-testimonial-${index}`}
                >
                  <blockquote className="text-lg mb-6">
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
                      <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Card className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and our team will reach out within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">School Name *</label>
                    <Input
                      required
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      placeholder="Your school name"
                      data-testid="input-school-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Person *</label>
                    <Input
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="Principal/Director name"
                      data-testid="input-contact-person"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="school@email.com"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">City *</label>
                    <Input
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Your city"
                      data-testid="input-city"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Students *</label>
                    <Input
                      type="number"
                      required
                      value={formData.numberOfStudents}
                      onChange={(e) => setFormData({ ...formData, numberOfStudents: e.target.value })}
                      placeholder="e.g., 200"
                      data-testid="input-number-students"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <Textarea
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    placeholder="Tell us more about your requirements"
                    rows={4}
                    data-testid="textarea-additional-info"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1" data-testid="button-book-meeting">
                    Book a Meeting
                  </Button>
                  <Button type="button" variant="outline" className="flex-1" data-testid="button-download-proposal" onClick={() => console.log("Download proposal")}>
                    Download Proposal
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
