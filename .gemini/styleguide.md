# Code Review Style Guide

Gemini, follow these rules when reviewing pull requests in this repository.

## Project context
- Next.js (App Router) + React + TypeScript + Tailwind CSS.
- Tests: Jest + React Testing Library (unit & component integration) and Playwright (E2E).
- CI enforces overall coverage ≥ 80% and patch coverage ≥ 90% on changed lines.

## Testing
- New logic in `lib/**` must have unit tests; new components in `components/**` must
  have React Testing Library tests covering their interactive behavior.
- New user-facing flows should have a Playwright E2E test in `e2e/**`.
- Flag changed code paths that are executed by tests but not actually asserted
  (covered but unverified) — coverage alone is not enough.
- Prefer reusing helpers in `lib/` over duplicating logic.

## TypeScript & React
- No `any`; prefer precise types. Keep components typed via their props.
- Mark client components with `'use client'` only when they use state/effects/handlers.
- Keep server components free of browser-only APIs.

## Accessibility & UI
- Interactive elements need an accessible name (`aria-label`, label, or text) and a
  `type` on `<button>`.
- Style with Tailwind utility classes; avoid inline styles.

## General
- Point out correctness bugs, missing error handling, and security issues first.
- Keep suggestions concrete and actionable; cite the file and line.
