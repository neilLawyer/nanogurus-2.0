"use client";
import Script from "next/script";
import { useRef } from "react";

/* eslint-disable @typescript-eslint/no-namespace */
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
/* eslint-enable @typescript-eslint/no-namespace */

export default function RobotViewer() {
  const mvRef = useRef<HTMLElement>(null);

  function resetCamera() {
    const mv = mvRef.current as any;
    if (!mv) return;
    mv.cameraOrbit = "0deg 75deg 105%";
    mv.fieldOfView = "auto";
  }

  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        strategy="afterInteractive"
      />

      <div className="relative w-full h-[500px] md:h-[650px] rounded-3xl overflow-hidden bg-[#0C0C0C] border border-[#1F1F1F]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gold/5 blur-3xl rounded-full pointer-events-none z-0" />

        <model-viewer
          ref={mvRef as any}
          src="/models/robot.glb"
          alt="NanoGurus 2.0 robot"
          camera-controls=""
          auto-rotate=""
          shadow-intensity="0.5"
          exposure="1.2"
          style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        />

        {/* Reset button */}
        <button
          onClick={resetCamera}
          className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#2A2A2A] text-[#9CA3AF] hover:text-gold hover:border-gold/40 transition-colors duration-200 text-[10px] uppercase tracking-wider"
          aria-label="Reset camera"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset
        </button>

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
