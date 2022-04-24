export const styleToString = (style: Record<string, string>) => {
  return Object.entries(style)
    .map(([k, v]) => `--${k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}:${v}`)
    .join(';')
    .split('_')
    .join('-')
}
