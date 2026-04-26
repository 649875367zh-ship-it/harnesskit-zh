import { clsx } from "clsx";
import { trustColor, trustTier } from "@/lib/types";
import { t } from "../../lib/i18n";

interface TrustBadgeProps {
  score: number;
  size?: "sm" | "md";
}

const tierTitle: Record<string, string> = {
  Safe: t("trust_safe_desc"),
  LowRisk: t("trust_low_risk_desc"),
  NeedsReview: t("trust_needs_review_desc"),
};

const tierLabel: Record<string, string> = {
  Safe: t("trust_safe"),
  LowRisk: t("trust_low_risk"),
  NeedsReview: t("trust_needs_review"),
};

export function TrustBadge({ score, size = "md" }: TrustBadgeProps) {
  const tier = trustTier(score);
  const color = trustColor(score);
  return (
    <span
      title={`${tierLabel[tier]} — ${tierTitle[tier]}`}
      className={clsx(
        "font-mono font-semibold tabular-nums",
        color,
        size === "sm" ? "text-xs" : "text-sm",
      )}
    >
      {score}
    </span>
  );
}
