import { Badge } from './badge'
import { Button } from './button'
import { Card } from './card'
import { Error } from './error'
import { Spinner } from './spinner'
import { ThemeProvider } from './theme-provider'
import type { App } from 'vue'

const components = [Badge, Button, Card, Error, Spinner, ThemeProvider]

const install = (app: App) => {
  components.forEach((component) => {
    component.name && app.component(component.name, component)
  })
}

export { default as Badge } from './badge'
export { default as Button } from './button'
export { default as Card } from './card'
export { default as Error } from './error'
export { default as Spinner } from './spinner'
export { default as ThemeProvider } from './theme-provider'
export * from './utils'

export default { install }
