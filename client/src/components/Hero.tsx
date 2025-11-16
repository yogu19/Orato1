import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F3ED] dark:bg-gray-950">
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-black/60 dark:via-black/40 dark:to-black/60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-black dark:text-white">Soft Skills that Build</span>
            <br />
            <span className="text-primary dark:text-yellow-500">Confidence</span>
            <span className="text-black dark:text-white">, </span>
            <span className="text-primary dark:text-yellow-500">Communication</span>
            <br />
            <span className="text-black dark:text-white">& </span>
            <span className="text-sky-400 dark:text-cyan-400">Character</span>
          </h1>

          <p className="text-lg lg:text-xl text-foreground/80 dark:text-white/90 mb-8 max-w-2xl mx-auto">
            Hybrid learning programs designed for Classes 6–10
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="default"
              className="dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-black"
              data-testid="button-book-trial"
              onClick={() => console.log("Book a Trial clicked")}
            >
              Book a Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="dark:bg-transparent dark:text-white dark:border-white/30"
              data-testid="button-watch-demo"
              onClick={() => console.log("Watch Demo clicked")}
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
