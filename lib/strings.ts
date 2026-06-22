// New string helpers added WITHOUT any tests, on purpose, to demonstrate the
// coverage gate failing (changed lines are not covered).

export function capitalize(s: string): string {
  if (!s) return s
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function truncate(s: string, max: number): string {
  if (s.length <= max) {
    return s
  }
  return s.slice(0, max) + '…'
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function repeat(s: string, n: number): string {
  let out = ''
  for (let i = 0; i < n; i++) {
    out += s
  }
  return out
}
