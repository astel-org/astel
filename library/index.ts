import type { App } from 'vue'
import { Badge } from './badge'
import { Button } from './button'
import { Card } from './card'
import { Error } from './error'
import { Loading } from './loading'
import { Spinner } from './spinner'
import { ThemeProvider } from './theme-provider'
import { Toast } from './toast'

const components = [Badge, Button, Card, Error, Loading, Spinner, ThemeProvider, Toast]

const install = (app: App) => {
  components.forEach((component) => {
    component.name && app.component(component.name, component)
  })
}

export { default as Badge } from './badge'
export { default as Button } from './button'
export { default as Card } from './card'
export { default as Error } from './error'
export { default as Loading } from './loading'
export { default as Spinner } from './spinner'
export { default as ThemeProvider } from './theme-provider'
export { default as Toast } from './toast'
export * from './utils'

export default { install }
