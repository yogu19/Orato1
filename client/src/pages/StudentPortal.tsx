import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, CheckCircle, Award, Trophy, BarChart3, Video, FileText, Download } from "lucide-react";
import { useState } from "react";

export default function StudentPortal() {
  const [loginData, setLoginData] = useState({
    studentId: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", loginData);
  };

  const stats = [
    { label: "Courses Enrolled", value: "5" },
    { label: "Certificates Earned", value: "2" },
    { label: "Points Collected", value: "850" },
    { label: "Badges Unlocked", value: "12" },
  ];

  const currentCourses = [
    { title: "Communication Skills", progress: 75 },
    { title: "Emotional Intelligence", progress: 40 },
    { title: "Public Speaking", progress: 90 },
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed progress reports",
    },
    {
      icon: Video,
      title: "Missed Class Replays",
      description: "Never miss a lesson - watch recorded sessions anytime",
    },
    {
      icon: CheckCircle,
      title: "Interactive Quizzes",
      description: "Test your knowledge with engaging assessments",
    },
    {
      icon: Trophy,
      title: "Rewards & Badges",
      description: "Earn points and unlock achievements as you learn",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Download your completion certificates and showcase skills",
    },
    {
      icon: FileText,
      title: "Performance Reports",
      description: "Downloadable reports to track your improvement",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-student-portal">
              Student Portal
            </h1>
            <p className="text-lg text-muted-foreground">
              Your personalized learning dashboard - Track progress, access courses, and earn rewards
            </p>
          </div>

          <div className="max-w-md mx-auto mb-16">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
              <p className="text-sm text-muted-foreground text-center mb-6">
                Access your personalized learning dashboard
              </p>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Student ID / Email *</label>
                  <Input
                    value={loginData.studentId}
                    onChange={(e) => setLoginData({ ...loginData, studentId: e.target.value })}
                    placeholder="Enter your student ID or email"
                    data-testid="input-student-id"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password *</label>
                  <Input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    placeholder="Enter your password"
                    data-testid="input-password"
                  />
                </div>
                <Button type="submit" className="w-full" data-testid="button-login">
                  Login to Dashboard
                </Button>
                <div className="text-center">
                  <a href="#" className="text-sm text-primary hover:underline" data-testid="link-forgot-password">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Dashboard Preview</h2>
            <p className="text-muted-foreground text-center mb-8">
              See what awaits you in your personalized portal
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center" data-testid={`card-stat-${index}`}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Current Courses</h3>
              <div className="space-y-4">
                {currentCourses.map((course, index) => (
                  <Card key={index} className="p-4" data-testid={`card-course-progress-${index}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{course.title}</span>
                      <span className="text-sm text-primary font-semibold">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Portal Features</h2>
            <p className="text-muted-foreground text-center mb-12">
              Everything you need for a complete learning experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-feature-${index}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
