import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { label: "About Us", path: "/about" },
    { label: "Our Team", path: "/about" },
    { label: "Careers", path: "/contact" },
    { label: "Blog", path: "/contact" },
  ],
  programs: [
    { label: "Communication Skills", path: "/programs" },
    { label: "Public Speaking", path: "/programs" },
    { label: "Emotional Intelligence", path: "/programs" },
    { label: "Leadership", path: "/programs" },
  ],
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
  { icon: Linkedin, label: "LinkedIn", url: "#" },
  { icon: Instagram, label: "Instagram", url: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Orato</h3>
            <p className="text-muted-foreground mb-4">
              Building confidence, communication, and character in students
              through innovative hybrid learning programs.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover-elevate transition-all"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.path}>
                    <span className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link href={link.path}>
                    <span className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@orato.edu</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Orato. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy">
                <span className="hover:text-primary transition-colors">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms">
                <span className="hover:text-primary transition-colors">
                  Terms of Service
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
