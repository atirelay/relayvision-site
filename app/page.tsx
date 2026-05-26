"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Mic,
  BrainCircuit,
  BarChart3,
  Factory,
  Utensils,
  HeartPulse,
  Hotel,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.12),transparent_25%)] pointer-events-none" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#070B14] text-xl font-black">
              R<span className="text-[#3B82F6]">V</span>
            </div>

            <div className="text-lg tracking-[0.25em] font-semibold">
              RELAY<span className="text-[#3B82F6]">VISION</span>
            </div>
          </div>

          <button className="rounded-2xl bg-[#3B82F6] px-5 py-3 text-sm font-semibold hover:bg-[#2563EB] transition">
            Request Pilot
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-2 text-sm text-blue-200">
            <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
            AI for the physical workforce
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Real-time guidance for frontline work.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            RelayVision uses wearable computer vision and voice-based AI
            guidance to help frontline teams train faster, reduce errors, and
            perform physical workflows correctly in real time.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center rounded-2xl bg-[#3B82F6] px-7 py-4 text-base font-semibold hover:bg-[#2563EB] transition">
              Request Pilot
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-base hover:bg-white/10 transition">
              <PlayCircle className="mr-2 h-5 w-5" />
              View Concept
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-5 border-t border-white/10 pt-6 text-sm text-slate-400">
            <div>
              <span className="block text-2xl font-bold text-white">01</span>
              Observe
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">02</span>
              Guide
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">03</span>
              Improve
            </div>
          </div>
        </motion.div>

        {/* UI Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-10 rounded-[3rem] bg-[#3B82F6]/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#0A0F1C] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Live Workflow</p>
                  <h3 className="text-2xl font-semibold">
                    Food Prep Training
                  </h3>
                </div>

                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">
                  Active
                </div>
              </div>

              <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#111827,#020617)] p-5">
                {/* Checklist */}
                <div className="absolute left-5 top-5 rounded-2xl border border-[#3B82F6]/40 bg-black/35 p-4 backdrop-blur">
                  <p className="mb-3 text-xs uppercase tracking-widest text-[#60A5FA]">
                    Next Step
                  </p>

                  <div className="space-y-2 text-sm">
                    <Step text="Wash hands" done />
                    <Step text="Prep station" done />
                    <Step text="Grill chicken" current />
                    <Step text="Plate dish" />
                  </div>
                </div>

                {/* AI Voice */}
                <div className="absolute bottom-5 right-5 rounded-2xl border border-[#3B82F6]/40 bg-black/35 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-widest text-[#60A5FA]">
                    Relay says
                  </p>

                  <p className="mt-2 max-w-[240px] text-lg font-semibold leading-snug">
                    “Complete handwash check before continuing.”
                  </p>
                </div>

                {/* Accuracy */}
                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Task Accuracy</p>
                  <p className="mt-1 text-3xl font-bold">94%</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="border-y border-white/10 bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#60A5FA]">
                The Problem
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                AI transformed office work. Frontline workers were left behind.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-300">
              Millions of workers do not sit behind a screen. They learn by
              doing, operate under pressure, and rely on inconsistent training.
              RelayVision brings AI directly into the workflow where mistakes,
              safety risks, and operational inefficiencies actually happen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ProblemCard
              title="High Turnover"
              text="New workers need to become productive faster without constant supervisor attention."
            />

            <ProblemCard
              title="Inconsistent Execution"
              text="Procedures are skipped, forgotten, or taught differently across teams and locations."
            />

            <ProblemCard
              title="Limited Visibility"
              text="Most physical workflow data disappears the moment the work is completed."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#60A5FA]">
            How It Works
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Observe. Understand. Guide. Improve.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            RelayVision combines wearable video, workflow intelligence, and
            voice feedback to support workers while they perform real-world
            tasks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Feature
            icon={<Eye />}
            title="Observe"
            text="Wearable or mounted cameras capture the physical task as it happens."
          />

          <Feature
            icon={<BrainCircuit />}
            title="Understand"
            text="Computer vision identifies objects, steps, sequence, and workflow state."
          />

          <Feature
            icon={<Mic />}
            title="Guide"
            text="Workers receive real-time voice prompts when help or correction is needed."
          />

          <Feature
            icon={<BarChart3 />}
            title="Improve"
            text="Teams gain visibility into errors, completion rates, and training gaps."
          />
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#60A5FA]">
              Industries
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Built for environments where work happens physically.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Industry
              icon={<Utensils />}
              title="Food & Beverage"
              text="Order prep, sanitation, onboarding, and operational consistency."
            />

            <Industry
              icon={<Hotel />}
              title="Hospitality"
              text="Housekeeping workflows, maintenance, and guest service training."
            />

            <Industry
              icon={<Factory />}
              title="Manufacturing"
              text="Assembly guidance, SOP verification, and safety workflows."
            />

            <Industry
              icon={<HeartPulse />}
              title="Healthcare"
              text="Hand hygiene reminders, procedural support, and compliance."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.2),transparent_35%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Pilot RelayVision on one workflow.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Start with one repetitive task. Measure training speed, accuracy,
            and operational consistency in real-world environments.
          </p>

          <button className="mt-8 rounded-2xl bg-[#3B82F6] px-8 py-5 text-base font-semibold hover:bg-[#2563EB] transition">
            Request Pilot Access
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="font-semibold tracking-[0.25em] text-white">
            RELAY<span className="text-[#3B82F6]">VISION</span>
          </div>

          <div>relayvision.ai</div>

          <div>AI operating layer for frontline work.</div>
        </div>
      </footer>
    </main>
  );
}

function Step({
  text,
  done,
  current,
}: {
  text: string;
  done?: boolean;
  current?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl px-3 py-2 ${
        current ? "border border-[#3B82F6]/70 bg-[#3B82F6]/10" : ""
      }`}
    >
      <span>{text}</span>

      {done ? (
        <CheckCircle2 className="h-4 w-4 text-[#60A5FA]" />
      ) : (
        <div
          className={`h-4 w-4 rounded-full border ${
            current ? "border-[#60A5FA]" : "border-slate-500"
          }`}
        />
      )}
    </div>
  );
}

function ProblemCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3B82F6]/10 text-[#60A5FA]">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function Industry({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#60A5FA]">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}