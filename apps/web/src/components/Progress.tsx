import { twMerge } from "tailwind-merge";

type Props = {
  currentValue: number;
  maxValue: number;
};

export function Progress({ currentValue, maxValue }: Props) {
  const currentValuePercentage = Math.min((currentValue / maxValue) * 100, 100);
  return (
    <div
      className="relative h-6 w-full rounded-full bg-gray-700"
      role="progressbar"
    >
      <div
        className={twMerge(
          "h-full rounded-full bg-accent-background text-center"
        )}
        style={{ width: `${currentValuePercentage}%` }}
      />
      <span
        className={twMerge(
          "absolute left-1/2 top-1/2 -translate-y-1/2 transform text-xs font-medium leading-none",
          currentValuePercentage > 50
            ? "text-accent-foreground"
            : "text-accent-background"
        )}
      >
        {currentValuePercentage.toFixed(2)}%
      </span>
    </div>
  );
}
