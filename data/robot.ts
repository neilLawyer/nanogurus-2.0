export type SubsystemFeature = {
  label: string;
  desc: string;
};

export type Subsystem = {
  num: string;
  title: string;
  features: SubsystemFeature[];
  images: string[];
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
        features: [
          {
            label: "Six Compliant Wheels",
            desc: "Our intake uses 6 compliant wheels powered by a NeveRest 3.7 motor, inspired by golf ball collecting machines, to collect artifacts within 0.05 seconds of contact minimizing time spent at the field wall.",
          },
          {
            label: "Current Limiter",
            desc: "An intake current limiter monitors motor draw in real time. When a third artifact causes a current spike, the rollers automatically shut off and our LED traffic light activates, preventing voltage drops and signaling drivers instantly.",
          },
        ],
        images: ["/images/robot_parts/INTAKE_ASSEMBLY.jpg"],
      },
      {
        num: "02",
        title: "Transfer",
        features: [
          {
            label: "2-Stage System",
            desc: "Our two-stage transfer achieves continuous contact from intake to shooter. Stage 1 uses 3D printed TPU sweepers at a 1.5:1 gear ratio to increase torque and reduce jams, while Stage 2 uses 4 compliant wheels powered by a NeveRest 3.7 motor for fast, consistent feeding directly into the flywheel.",
          },
          {
            label: "Ramp with Funnels",
            desc: "Our custom 3D printed ramp with integrated funnels guides artifacts smoothly between transfer stages, eliminating dead spots and jamming. The funnel geometry ensures consistent artifact alignment into the shooter, allowing us to achieve an average full cycle time of 9 seconds.",
          },
        ],
        images: ["/images/robot_parts/FULL_BOT_DESIGN POSTER.jpg"],
      },
      {
        num: "03",
        title: "Outtake",
        features: [
          {
            label: "Adjustable Hood",
            desc: "A servo-driven gear dynamically adjusts the hood angle between 50°–70°, enabling accurate scoring from both the near and far zones without repositioning.",
          },
          {
            label: "Steel Flywheel",
            desc: "Our steel flywheel adds 1.60 lbs of rotational inertia with 7mm of compression, reducing velocity drops per artifact from ~250 TPS and cutting shooting time per 3-artifact cycle from 0.73 to 0.27 seconds.",
          },
          {
            label: "Custom PIDF + Feedforward",
            desc: "A gain-scheduled PIDF controller paired with predictive feedforward injection maintains target flywheel velocity regardless of battery voltage or shooting load, maximizing consistency across all match conditions.",
          },
        ],
        images: [
          "/images/robot_parts/SHOOTER_ASSEMBLY.jpg",
          "/images/robot_parts/SHOOTER_ASSEMBLY_pt2.jpg",
        ],
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
