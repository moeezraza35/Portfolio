"use client";

import { Home, ArrowLeft } from "lucide-react";

export default function Learn() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Decorative gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 max-w-xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Page under-develop
        </div>

        <h1 className="mt-6 font-display text-6xl font-black tracking-tighter text-foreground sm:text-7xl">
          Comming Soon
        </h1>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_rgba(64,167,72,0.6)] transition-all hover:bg-primary/90 hover:shadow-[0_14px_40px_-12px_rgba(64,167,72,0.7)]">
            <Home size={17} />
            Back to home
          </a>

          <button
            onClick={() => history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent">
            <ArrowLeft size={17} />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
