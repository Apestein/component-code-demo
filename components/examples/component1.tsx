import Component1 from "../component1"
import { Code } from "@/app/components/[slug]/code"

export function Component1Example() {
  return <Component1 />
}

const exmapleCode = ` 
\`\`\`tsx
export function Component1Example() {
  return <Component1 />
}
\`\`\`
`

export function ExampleCode() {
  return <Code code={exmapleCode} />
}
