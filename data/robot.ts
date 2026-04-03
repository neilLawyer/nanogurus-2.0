export type Subsystem = {
  num: string;
  title: string;
  desc: string;
};

export type CodeHighlight = {
  title: string;
  desc: string;
  icon: string;
};

export type RobotSeason = {
  season: string;   // e.g. "2025-26"
  label: string;    // e.g. "2025–26 Season"
  name: string;     // Robot name
  tagline: string;
  subsystems: Subsystem[];
  timeline: string[];
  codeHighlights: CodeHighlight[];
  portfolioPath: string | null; // null = no PDF yet
};

export const robots: RobotSeason[] = [
  // ── ADD NEW SEASON AT THE TOP ──────────────────────────────────────────────
  {
    season: "2025-26",
    label: "2025–26 Season",
    name: "DECODE",
    tagline: "Compact, modular robot optimized for fast 3-artifact cycles and accurate shooting from any zone.",
    subsystems: [
      {
        num: "01",
        title: "Intake",
        desc: "6 compliant wheels for rapid collection. Collects within 50ms of contact.",
      },
      {
        num: "02",
        title: "Ramp with Funnels",
        desc: "3D-printed custom ramp with integrated funnels for smooth artifact transfer.",
      },
      {
        num: "03",
        title: "Transfer Stage 1",
        desc: "TPU sweepers with a 1.5:1 gear ratio to precisely move artifacts upstream.",
      },
      {
        num: "04",
        title: "Transfer Stage 2",
        desc: "4 compliant wheels driven by a NeveRest 3.7 motor for reliable delivery.",
      },
      {
        num: "05",
        title: "Adjustable Hood",
        desc: "Servo-driven mechanism with custom 3D-printed components. Range: 50°–70°.",
      },
      {
        num: "06",
        title: "Flywheel",
        desc: "Steel flywheel with 1.60 lbs added weight to minimize velocity drops under load.",
      },
    ],
    timeline: [
      "Brainstorming",
      "Prototyping",
      "Sketch / CAD",
      "Testing & Evaluation",
      "Refining & Optimizing",
    ],
    codeHighlights: [
      {
        title: "Sensor Fusion",
        desc: "Kalman Filter-inspired approach combining multiple sensor inputs for robust localization.",
        icon: "📡",
      },
      {
        title: "Flywheel PIDF",
        desc: "Custom PIDF controller with gain scheduling for accurate, consistent scoring.",
        icon: "⚙️",
      },
      {
        title: "Ballistics Table",
        desc: "Military-inspired ballistics table for precise trajectory calculations at any position.",
        icon: "🎯",
      },
      {
        title: "Auto Goal Alignment",
        desc: "Vision-based automatic goal alignment for hands-free targeting during TeleOp.",
        icon: "🔭",
      },
      {
        title: "LED Transparency",
        desc: "LED driver providing real-time system state feedback to drive team.",
        icon: "💡",
      },
      {
        title: "Current-Draw Limiter",
        desc: "Intelligent current monitoring to prevent brownouts during peak motor demand.",
        icon: "🔋",
      },
    ],
    portfolioPath: "/design-portfolio.pdf",
    // FILE: Drop pages 5-10 of the engineering portfolio as /public/design-portfolio.pdf
  },
  // ADD NEW SEASONS ABOVE THIS LINE — copy the block above and update all fields
];
