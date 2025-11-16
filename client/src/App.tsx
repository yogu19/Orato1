import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ProgramsPage from "@/pages/ProgramsPage";
import Schools from "@/pages/Schools";
import Courses from "@/pages/Courses";
import Contact from "@/pages/Contact";
import StudentPortal from "@/pages/StudentPortal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={ProgramsPage} />
      <Route path="/schools" component={Schools} />
      <Route path="/courses" component={Courses} />
      <Route path="/contact" component={Contact} />
      <Route path="/student-portal" component={StudentPortal} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
