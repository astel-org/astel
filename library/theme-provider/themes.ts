export const commonVars = {
  astelSuccess: '#0070f3',
  astelError: '#f00',
  astelWarning: '#f5a623',
  astelPink: '#ff0080',
  astelViolet: '#7928ca',
  astelRadius: '5px',
  astelGapHalf: '12px',
  astelGapQuarter: '8px',
  astelFormSmallHeight: '32px',
  astelFormSmallFont: '0.875rem',
  astelFormLineHeight: '1.25rem',
  astelFormFont: '0.875rem',
  astelFormHeight: '40px',
  astelFormLargeHeight: '48px',
  astelFormLargeFont: '1rem',
  astelFormLargeLineHeight: '1.5rem',
}

export const lightTheme = {
  astelForeground: '#000',
  astelBackground: '#fff',
  astelSecondary: 'var(--accents-5)',
  accents_1: '#fafafa',
  accents_2: '#eaeaea',
  accents_3: '#999',
  accents_4: '#888',
  accents_5: '#666',
  accents_6: '#444',
  accents_7: '#333',
  accents_8: '#111',
  bgGhost: 'hsl(0deg 0% 100% / 80%)',
  shadowSmall: '0 5px 10px rgb(0 0 0 / 12%)',
  shadowMedium: '0 8px 30px rgb(0 0 0 / 12%)',
}

export const darkTheme = {
  astelForeground: '#fff',
  astelBackground: '#000',
  astelSecondary: 'var(--accents-5)',
  accents_8: '#fafafa',
  accents_7: '#eaeaea',
  accents_6: '#999',
  accents_5: '#888',
  accents_4: '#666',
  accents_3: '#444',
  accents_2: '#333',
  accents_1: '#111',
  bgGhost: 'rgba(0 0 0 / 75%)',
  shadowSmall: '0 0 0 1px var(--accents-2)',
  shadowMedium: '0 0 0 1px var(--accents-2)',
}

export const normalize = `
html {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}
* {
  -webkit-tap-highlight-color: transparent;
}
*, *::before, *::after {
  box-sizing: inherit;
  text-rendering: geometricprecision;
  -webkit-tap-highlight-color: transparent;
}
html, body {
  background-color: var(--astel-background);
  color: var(--astel-foreground);
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
  margin: 0;
  padding: 0;
  min-height: 100%;
  position: relative;
  overflow-x: hidden;
}
::selection {
  background-color: var(--astel-selection);
  color: var(--astel-foreground);
}
button, input, select, textarea {
  font-family: inherit;
  color: inherit;
  margin: 0;
  line-height: inherit;
  font-size: inherit;
}
button:focus, input:focus, select:focus, textarea:focus {
  outline: none;
}
details {
  border: none;
}
details:focus, details:hover, details:active {
  outline: none;
}
summary {
  cursor: pointer;
  user-select: none;
}
summary::-webkit-details-marker {
  display: none;
}
summary:focus, summary:hover, summary:active {
  outline: none;
}`
