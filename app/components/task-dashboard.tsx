"use client";

import { useState, type ReactNode } from "react";

type Task = {
  id: string;
  name: string;
  description: string;
  priority: "High" | "Medium";
  icon: ReactNode;
};

const tasks: Task[] = [
  {
    id: "sword-control",
    name: "Sword Control",
    description: "Practice precise anti-magic sword movements.",
    priority: "High",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m14.7 5.3 4-2-2 4-7.4 7.4-2-2 7.4-7.4Z" />
        <path d="m5.8 12.2 6 6M4 20l3-3M10.5 15.5l-3 3" />
      </svg>
    ),
  },
  {
    id: "physical-endurance",
    name: "Physical Endurance",
    description: "Complete a focused strength and stamina session.",
    priority: "Medium",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 9v6M3.5 10.5v3M18 9v6M20.5 10.5v3M6 12h12" />
      </svg>
    ),
  },
  {
    id: "team-coordination",
    name: "Team Coordination",
    description: "Review a preparation plan with the Black Bulls.",
    priority: "High",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M3.8 19c.5-3.2 2.2-5 5.2-5s4.7 1.8 5.2 5M14.2 14.2c.7-.5 1.6-.7 2.8-.7 2.3 0 3.7 1.4 4 3.8" />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  );
}

function ThreatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 3.8 18.5c-.5 1 .2 2.2 1.4 2.2h13.6c1.2 0 1.9-1.2 1.4-2.2L12 3Z" />
      <path d="M12 8.5v5M12 17.2v.1" />
    </svg>
  );
}

export default function TaskDashboard() {
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
    <main>
      <header className="hero">
        <div className="hero__glow" />
        <div className="page-shell hero__content">
          <div className="eyebrow">
            <span className="eyebrow__mark" />
            Preparation plan
          </div>
          <div className="hero__grid">
            <div>
              <h1>
                Asta&apos;s <span>Preparation Dashboard</span>
              </h1>
              <p className="hero__intro">
                Track the three training tasks required to prepare for Lucifero.
                Complete each task as you finish it.
              </p>
            </div>
            <aside className="threat-card" aria-labelledby="threat-title">
              <div className="threat-card__icon">
                <ThreatIcon />
              </div>
              <div>
                <div className="threat-card__label">Threat brief</div>
                <h2 id="threat-title">Lucifero</h2>
                <p>
                  Lucifero&apos;s gravity magic makes focused preparation
                  important. This plan tracks training only; it does not predict
                  a combat outcome.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <section className="page-shell dashboard" aria-labelledby="training-title">
        <div className="section-heading">
          <div>
            <div className="eyebrow eyebrow--dark">Training plan</div>
            <h2 id="training-title">Required preparation</h2>
          </div>
          <p>Complete or undo any task. Progress updates immediately.</p>
        </div>

        <div className="tasks-grid">
          {tasks.map((task, index) => {
            const isComplete = completedTaskIds.includes(task.id);

            return (
              <article
                key={task.id}
                className={`task-card ${isComplete ? "task-card--complete" : ""}`}
              >
                <div className="task-card__top">
                  <div className="task-icon">{task.icon}</div>
                  <div
                    className={`status-badge ${isComplete ? "status-badge--complete" : ""}`}
                  >
                    <span className="status-dot" />
                    {isComplete ? "Completed" : "Incomplete"}
                  </div>
                </div>

                <div className="task-card__body">
                  <div className="task-number">
                    Task {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{task.name}</h3>
                  <p>{task.description}</p>
                </div>

                <div className="task-card__footer">
                  <div
                    className={`priority priority--${task.priority.toLowerCase()}`}
                  >
                    <span>Priority</span>
                    <strong>{task.priority}</strong>
                  </div>
                  <button
                    type="button"
                    className={`task-toggle ${isComplete ? "task-toggle--complete" : ""}`}
                    aria-pressed={isComplete}
                    aria-label={
                      isComplete
                        ? `Undo ${task.name} completion`
                        : `Mark ${task.name} complete`
                    }
                    onClick={() => toggleTask(task.id)}
                  >
                    <span className="task-toggle__box">
                      {isComplete && <CheckIcon />}
                    </span>
                    <span>
                      {isComplete ? "Undo Completion" : "Mark Complete"}
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <section className="progress-panel" aria-labelledby="progress-title">
          <div className="progress-panel__summary">
            <div className="progress-ring" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <circle
                  className="progress-ring__track"
                  cx="60"
                  cy="60"
                  r="52"
                />
                <circle
                  className="progress-ring__value"
                  cx="60"
                  cy="60"
                  r="52"
                  pathLength="100"
                  strokeDasharray={`${completionPercentage} 100`}
                />
              </svg>
              <strong>{completionPercentage}%</strong>
            </div>
            <div>
              <div className="eyebrow eyebrow--dark">Plan progress</div>
              <h2 id="progress-title" aria-live="polite">
                {completedCount} of {tasks.length} completed
              </h2>
            </div>
          </div>

          <div className="progress-panel__detail">
            <div className="progress-labels">
              <span>Training-plan completion</span>
              <strong>{completionPercentage}%</strong>
            </div>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={completionPercentage}
              aria-label={`${completionPercentage}% of training tasks completed`}
            >
              <span style={{ width: `${completionPercentage}%` }} />
            </div>
            <p>
              This percentage measures completed training tasks only; it does
              not represent Asta&apos;s chance of defeating Lucifero.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}