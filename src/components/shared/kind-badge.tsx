import { clsx } from "clsx";
import type { ExtensionKind } from "@/lib/types";
import { t } from "../../lib/i18n";

const kindStyles: Record<ExtensionKind, string> = {
  skill: "bg-kind-skill/15 text-kind-skill ring-kind-skill/25",
  mcp: "bg-kind-mcp/15 text-kind-mcp ring-kind-mcp/25",
  plugin: "bg-kind-plugin/15 text-kind-plugin ring-kind-plugin/25",
  hook: "bg-kind-hook/15 text-kind-hook ring-kind-hook/25",
  cli: "bg-kind-cli/15 text-kind-cli ring-kind-cli/25",
};

const kindLabel: Record<ExtensionKind, string> = {
  skill: "skill",
  mcp: "MCP",
  plugin: "plugin",
  hook: "hook",
  cli: "CLI",
};

const kindTitle: Record<ExtensionKind, string> = {
  skill: t("kind_skill_desc"),
  mcp: t("kind_mcp_desc"),
  plugin: t("kind_plugin_desc"),
  hook: t("kind_hook_desc"),
  cli: t("kind_cli_desc"),
};

export function KindBadge({ kind }: { kind: ExtensionKind }) {
  return (
    <span
      title={kindTitle[kind]}
      className={clsx(
        "rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset transition-colors duration-150",
        kindStyles[kind],
      )}
    >
      {kindLabel[kind]}
    </span>
  );
}
