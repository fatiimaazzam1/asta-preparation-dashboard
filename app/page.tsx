"use client";

import { useState } from "react";

const tasks = [
  { id: "sword-control", name: "Sword Control" },
  { id: "physical-endurance", name: "Physical Endurance" },
  { id: "team-coordination", name: "Team Coordination" },
] as const;

export default function Home() {
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const completedCount = completedTaskIds.length;
  const completionPercentage = Math.round(
    (completedCount / tasks.length) * 100,
  );

  function toggleTask(taskId: string) {
    setCompletedTaskIds((current) =>
      current.includes(taskId)
        ? current.filter((id) => id !== taskId)
        : [...current, taskId],
    );
  }

  return (
    <main className="min-h-screen bg-zinc-100 px-4 py-12 text-zinc-900">
      <section className="mx-auto max-w-xl space-y-6 rounded-lg bg-white p-6 shadow-sm">
        <header>
          <h1 className="text-2xl font-bold">Asta&apos;s Preparation Dashboard</h1>
          <p className="mt-2 text-sm text-zinc-600">Training task progress</p>
        </header>

        <section
          aria-label="Preparation progress"
          className="flex items-center justify-between rounded-md bg-zinc-50 p-4"
        >
          <p aria-live="polite" className="font-medium">
            Completed tasks: {completedCount}/{tasks.length}
          </p>
          <p className="text-xl font-bold">{completionPercentage}%</p>
        </section>

        <ul className="divide-y divide-zinc-200">
          {tasks.map((task) => {
            const isComplete = completedTaskIds.includes(task.id);

            return (
              <li
                key={task.id}
                className="flex items-center justify-between gap-4 py-4"
              >
                <div>
                  <h2 className="font-semibold">{task.name}</h2>
                  <p className="text-sm text-zinc-600">
                    {isComplete ? "Completed" : "Incomplete"}
                  </p>
                </div>
                <button
                  type="button"
                  aria-pressed={isComplete}
                  onClick={() => toggleTask(task.id)}
                  className="shrink-0 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                >
                  {isComplete ? "Undo" : "Mark Complete"}
                </button>
              </li>
            );
          })}
        </ul>

        <p className="text-sm text-zinc-600">
          Percentage reflects completed training tasks only.
        </p>
      </section>
    </main>
  );
}
