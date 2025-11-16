import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { useState } from "react";

export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4" data-testid="heading-contact">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="Enter your name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      data-testid="input-email-contact"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">I am a *</label>
                    <Select value={contactData.role} onValueChange={(value) => setContactData({ ...contactData, role: value })}>
                      <SelectTrigger data-testid="select-role">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="school-admin">School Administrator</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      data-testid="textarea-message-contact"
                    />
                  </div>
                  <Button type="submit" className="w-full" data-testid="button-submit-contact">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <Card className="p-6 hover-elevate transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@orato.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover-elevate transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover-elevate transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office</h3>
                        <p className="text-muted-foreground">Tier-2 City, India</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay connected with us on social media for updates, tips, and inspiring student stories.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                      data-testid="link-instagram"
                    >
                      <SiInstagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                      data-testid="link-linkedin"
                    >
                      <SiLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                      data-testid="link-youtube"
                    >
                      <SiYoutube className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
                <Card className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Monday - Friday:</span>
                      <span className="text-sm text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Saturday:</span>
                      <span className="text-sm text-muted-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Sunday:</span>
                      <span className="text-sm text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
