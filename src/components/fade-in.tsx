import { cn } from "@/lib/cn";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

function delayClass(delay: number) {
  if (delay >= 0.2) return "delay-200";
  if (delay >= 0.12) return "delay-150";
  if (delay >= 0.1) return "delay-100";
  if (delay >= 0.05) return "delay-75";
  return "";
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <div className={cn("animate-rise", delayClass(delay), className)}>
      {children}
    </div>
  );
}
