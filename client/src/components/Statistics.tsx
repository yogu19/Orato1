import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const stats = [
  { value: 23, label: "Partner Schools", suffix: "", color: "text-yellow-500 dark:text-yellow-400" },
  { value: 100, label: "Students Impacted", suffix: "+", color: "text-cyan-500 dark:text-cyan-400" },
  { value: 60, label: "Revenue Generated", prefix: "₹", suffix: "K", color: "text-yellow-500 dark:text-yellow-400" },
];

function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Card className="bg-gray-950 dark:bg-gray-950 border-gray-800 dark:border-gray-800 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
