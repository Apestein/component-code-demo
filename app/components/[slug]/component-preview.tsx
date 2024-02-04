import { Code } from "./code"

export function ComponentPreview({
  Component,
  code,
}: {
  Component: React.ComponentType
  code: string
}) {
  const rawCode = "```tsx\n" + code + "```"
  return (
    <div className="space-y-3">
      <Component />
      <Code code={rawCode} />
    </div>
  )
}
