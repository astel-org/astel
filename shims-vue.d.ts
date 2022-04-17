declare module '*.vue' {
  import type { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module '*.md' {
  const Component: ComponentOptions
  export default Component
}

declare module 'vue-prism-component'
