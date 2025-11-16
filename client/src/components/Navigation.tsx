import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Programs", path: "/programs" },
    { label: "Schools", path: "/schools" },
    { label: "Courses", path: "/courses" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <span className="text-2xl font-bold text-primary dark:text-[#D4A574]">Orato</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                <span
                  className={`text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-white ${
                    location === item.path
                      ? "text-primary dark:text-white"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover-elevate transition-all"
              aria-label="Toggle theme"
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <Button variant="outline" size="default" asChild data-testid="button-enroll">
              <Link href="/courses">Enroll Now</Link>
            </Button>
            <Button 
              size="default" 
              asChild 
              data-testid="button-partner-nav"
              className="bg-primary hover:bg-primary/90 dark:bg-[#D4A574] dark:hover:bg-[#C89564] dark:text-black"
            >
              <Link href="/schools">Partner With Us</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800" data-testid="mobile-menu">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  <span
                    className={`text-sm font-medium ${
                      location === item.path
                        ? "text-primary dark:text-white"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover-elevate transition-all"
                  aria-label="Toggle theme"
                  data-testid="button-mobile-theme-toggle"
                >
                  {theme === "light" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                </button>
              </div>
              <Button variant="outline" size="default" asChild data-testid="button-mobile-enroll">
                <Link href="/courses">Enroll Now</Link>
              </Button>
              <Button 
                size="default" 
                asChild 
                data-testid="button-mobile-partner"
                className="bg-primary hover:bg-primary/90 dark:bg-[#D4A574] dark:hover:bg-[#C89564] dark:text-black"
              >
                <Link href="/schools">Partner With Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
