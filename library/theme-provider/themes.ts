export const commonVars = {
  // success
  astelSuccessLighter: '#D3E5FF',
  astelSuccessLight: '#3291FF',
  astelSuccess: '#0070f3',
  astelSuccessDark: '#0761D1',

  // error
  astelErrorLighter: '#F7D4D6',
  astelErrorLight: '#FF1A1A',
  astelError: '#E00',
  astelErrorDark: '#C50000',

  // warning
  astelWarningLighter: '#FFEFCF',
  astelWarningLight: '#F7B955',
  astelWarning: '#f5a623',
  astelWarningDark: '#AB570A',

  // violet
  astelVioletLighter: '#D8CCF1',
  astelVioletLight: '#8A63D2',
  astelViolet: '#7928CA',
  astelVioletDark: '#4C2889',

  // cyan
  astelCyanLighter: '#AAFFEC',
  astelCyanLight: '#79FFE1',
  astelCyan: '#50E3C2',
  astelCyanDark: '#29BC9B',

  // highlight
  astelPurple: '#f81ce5',
  astelMagenta: '#eb367f',
  astelPink: '#ff0080',
  astelYellow: '#fff500',

  // fonts
  fontSans: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;`,
  fontMono: `Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;`,

  // common
  astelRadius: '5px',
  astelGap: '24px',
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
  astelBorder: '#eaeaea',
  astelSelection: 'var(--astel-cyan-light)',
  astelCode: 'var(--astel-purple)',
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
  astelBorder: '#333',
  astelSelection: 'var(--astel-purple)',
  astelCode: 'var(--astel-cyan-light)',
  bgGhost: 'rgba(0 0 0 / 75%)',
  shadowSmall: '0 0 0 1px var(--accents-2)',
  shadowMedium: '0 0 0 1px var(--accents-2)',
}

export const normalize = `
html {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

*, 
*::before, 
*::after {
  box-sizing: inherit;
  text-rendering: geometricprecision;
  -webkit-tap-highlight-color: transparent;

}

html {
  font-size: 16px;
}

html, body {
  background-color: var(--astel-background);
  color: var(--astel-foreground);
}

body {
  font-size: 1rem;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
  margin: 0;
  padding: 0;
  min-height: 100%;
  position: relative;
  overflow-x: hidden;
}

p,
small {
	font-weight: 400;
	color: inherit;
	letter-spacing: -.005625em
}

p {
	margin: 1em 0;
	font-size: 1em;
	line-height: 1.625em
}

small {
	margin: 0;
	line-height: 1.5;
	font-size: .875em
}

b {
	font-weight: 600
}

span {
	font-size: inherit;
	color: inherit;
	font-weight: inherit
}

img {
	max-width: 100%
}

a {
	cursor: pointer;
	font-size: inherit;
	-webkit-touch-callout: none;
	-webkit-tap-highlight-color: transparent;
	align-items: center;
	color: var(--astel-success);
	text-decoration: none
}

a:hover {
	text-decoration: none
}

ol,
ul {
	padding: 0;
	list-style-type: none;
	margin: var(--astel-gap-half) var(--astel-gap-half) var(--astel-gap-half) var(--astel-gap);
	color: var(--astel-foreground)
}

li {
	margin-bottom: .625em;
	font-size: 1em;
	line-height: 1.625em
}

ul li:before {
	content: "-";
	display: inline-block;
	color: var(--accents-4);
	position: absolute;
	margin-left: -.9375em
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0 0 .7rem 0;
	color: inherit
}

h1 {
	font-size: 3rem;
	letter-spacing: -.02em;
	line-height: 1.5;
	font-weight: 700
}

h2 {
	font-size: 2.25rem;
	letter-spacing: -.02em;
	font-weight: 600
}

h3 {
	font-size: 1.5rem;
	letter-spacing: -.02em;
	font-weight: 600
}

h4 {
	font-size: 1.25rem;
	letter-spacing: -.02em;
	font-weight: 600
}

h5 {
	font-size: 1rem;
	letter-spacing: -.01em;
	font-weight: 600
}

h6 {
	font-size: .875rem;
	letter-spacing: -.005em;
	font-weight: 600
}

button,
input,
select,
textarea {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	color: inherit;
	margin: 0
}

button:focus, 
input:focus, 
select:focus, 
textarea:focus {
  outline: none;
}

code {
	color: var(--astel-code);
	font-family: var(--font-mono);
	font-size: .9em;
	white-space: pre-wrap
}

code::after,
code::before {
	content: "\`"
}

pre {
	border: 1px solid var(--accents-2);
	padding: calc(var(--astel-gap) * .9) var(--astel-gap);
	margin: var(--astel-gap) 0;
	border-radius: var(--astel-radius);
	font-family: var(--font-mono);
	white-space: pre;
	overflow: auto;
	font-size: .875rem;
	line-height: 1.5;
	text-align: left;
	font-size: 14px;
	-webkit-overflow-scrolling: touch
}

pre code {
	color: var(--astel-foreground);
	font-size: 1em;
	line-height: 1.25em;
	white-space: pre
}

pre code::after,
pre code::before {
	display: none
}

pre p {
	margin: 0
}

pre::-webkit-scrollbar {
	display: none;
	width: 0;
	height: 0;
	background: 0 0
}

hr {
	border-color: var(--accents-2)
}

details {
	background-color: var(--accents-1);
	border: none
}

details:active,
details:focus,
details:hover {
	outline: 0
}

summary {
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	list-style: none;
	outline: 0
}

summary::before,
summary::marker {
	display: none
}

summary::-moz-list-bullet {
	font-size: 0
}

summary:active,
summary:focus,
summary:hover {
	outline: 0;
	list-style: none
}

blockquote {
	padding: calc(.667 * var(--astel-gap)) var(--astel-gap);
	color: var(--accents-5);
	background-color: var(--accents-1);
	border-radius: var(--astel-radius);
	margin: 1.5em 0;
	border: 1px solid var(--astel-border)
}

blockquote:first-child {
	margin-top: 0
}

blockquote:last-child {
	margin-bottom: 0
}

::-moz-selection {
	background-color: var(--astel-selection);
	color: var(--astel-foreground)
}

::selection {
	background-color: var(--astel-selection);
	color: var(--astel-foreground)
}
`
