import {
  ArrowLeftRight,
  BadgeCheck,
  BookOpen,
  Building2,
  ClipboardList,
  Cloud,
  Database,
  FileText,
  Globe,
  KeyRound,
  Layers,
  LayoutDashboard,
  MessageCircleQuestion,
  Repeat,
  Rocket,
  Share2,
  Snowflake,
  Store,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  id: string;
  icon: LucideIcon;
  name: string;
  line: string;
};

/**
 * Source: Rolvo Admin → Settings → License features, 5 October 2026.
 *
 * TIER MAPPING — which plan unlocks PREMIUM is not yet confirmed by the client.
 * Until it is, the pricing table shows Premium as an add-on rather than
 * assigning it to a plan. When the answer comes back, set PREMIUM_FROM below
 * and the comparison table follows automatically.
 */
export const PREMIUM_FROM: "pro" | "business" | "enterprise" | null = null;

export const STANDARD: Feature[] = [
  {
    id: "tasks",
    icon: ClipboardList,
    name: "Task & story creation",
    line: "Create tasks and stories on the board and assign them to agents.",
  },
  {
    id: "runs",
    icon: Rocket,
    name: "Agent runs",
    line: "Run the delivery agents in CI against a connected org.",
  },
  {
    id: "memory",
    icon: Database,
    name: "Project & org memory",
    line: "Persistent memory of your org and past work, shared across linked projects.",
  },
  {
    id: "skills",
    icon: BookOpen,
    name: "Create skills",
    line: "Author reusable skills and seed them into a project for agents to load.",
  },
  {
    id: "ask",
    icon: MessageCircleQuestion,
    name: "Task Q&A",
    line: "Ask questions about the implementation. Answers run inline or in CI.",
  },
  {
    id: "evals",
    icon: BadgeCheck,
    name: "Evals & quality scoring",
    line: "Grade delivered work against acceptance criteria and the live org.",
  },
  {
    id: "docs",
    icon: FileText,
    name: "Deliverable & shared docs",
    line: "Deliverables in Markdown, PDF or Word, plus org-level shared docs.",
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    name: "Working dashboard",
    line: "A condensed board of delivered work, grouped into sprint windows.",
  },
  {
    id: "integrations",
    icon: Share2,
    name: "Slack, Notion & Jira",
    line: "Notifications and agent access to the tools your team already uses.",
  },
  {
    id: "byom",
    icon: KeyRound,
    name: "Bring your own model",
    line: "Connect any major model with your own subscription or key.",
  },
];

export const PREMIUM: Feature[] = [
  {
    id: "pipelines",
    icon: Workflow,
    name: "Multi-agent pipelines",
    line: "Run a story through the delivery team stage by stage, with gates.",
  },
  {
    id: "marketplace",
    icon: Store,
    name: "Marketplace agents",
    line: "Install third-party agents from the marketplace to handle tasks.",
  },
  {
    id: "extension",
    icon: Globe,
    name: "Browser extension agents",
    line: "Org-aware agents that work over your live Salesforce session.",
  },
  {
    id: "demos",
    icon: Video,
    name: "Demo videos",
    line: "Narrated screen-recording demos generated for a task.",
  },
];

export const ENTERPRISE: Feature[] = [
  {
    id: "legacy",
    icon: Repeat,
    name: "Legacy data conversion",
    line: "Orders, quotes and contracts converted from legacy systems.",
  },
  {
    id: "sap",
    icon: ArrowLeftRight,
    name: "SAP integration",
    line: "Bi-directional integration with SAP ERP.",
  },
  {
    id: "netsuite",
    icon: Layers,
    name: "Oracle NetSuite",
    line: "Integration with Oracle NetSuite ERP.",
  },
  {
    id: "datacloud",
    icon: Cloud,
    name: "Salesforce Data Cloud",
    line: "Ingestion, harmonisation and activation.",
  },
  {
    id: "snowflake",
    icon: Snowflake,
    name: "Snowflake",
    line: "Zero-copy or pipeline integration with the Snowflake data cloud.",
  },
  {
    id: "databricks",
    icon: Database,
    name: "Databricks",
    line: "Integration with the Databricks lakehouse platform.",
  },
  {
    id: "bespoke",
    icon: Building2,
    name: "Other enterprise services",
    line: "Bespoke integrations and professional services, scoped per engagement.",
  },
];
