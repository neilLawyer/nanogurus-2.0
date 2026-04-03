"use client";
import Script from "next/script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        "camera-controls"?: boolean | string;
        "auto-rotate"?: boolean | string;
        "shadow-intensity"?: string;
        exposure?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

export default function RobotViewer() {
  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        strategy="beforeInteractive"
      />

      <div className="relative w-full h-[500px] md:h-[650px] rounded-3xl overflow-hidden bg-[#0C0C0C] border border-[#1F1F1F]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gold/5 blur-3xl rounded-full pointer-events-none z-0" />

        <model-viewer
          src="/models/robot.glb"
          alt="NanoGurus 2.0 robot"
          camera-controls=""
          auto-rotate=""
          shadow-intensity="0.5"
          exposure="1.2"
          style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-[#2A2A2A] pointer-events-none z-10">
          <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
          </svg>
          <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider">Drag to rotate · Scroll to zoom</span>
        </div>
      </div>
    </>
  );
}
