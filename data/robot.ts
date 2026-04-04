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
        desc: "Six Compliant Wheels: Our intake uses 6 compliant wheels powered by a NeveRest 3.7 motor, inspired by golf ball collecting machines, to collect artifacts within 0.05 seconds of contact minimizing time spent at the field wall. Current Limiter: An intake current limiter monitors motor draw in real time. When a third artifact causes a current spike, the rollers automatically shut off and our LED traffic light activates, preventing voltage drops and signaling drivers instantly.",
      },
      {
        num: "02",
        title: "Transfer",
        desc: "TPU sweepers with a 1.5:1 gear ratio move artifacts upstream precisely, while 4 compliant wheels driven by a NeveRest 3.7 motor ensure reliable delivery through the system.",
      },
      {
        num: "03",
        title: "Shooter",
        desc: "Steel flywheel with 1.60 lbs of added weight minimizes velocity drops under load. A servo-driven adjustable hood with custom 3D-printed components provides a shooting range of 50°–70° for accurate scoring from any zone.",
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
    portfolioPath: null,
  },
  // ADD NEW SEASONS ABOVE THIS LINE — copy the block above and update all fields
];
