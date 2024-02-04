import fs from "fs"
import path from "path"
import { ComponentPreview } from "./component-preview"
import dynamic from "next/dynamic"

const componentDir = path.join(process.cwd(), "components")

function getComponentCodeBySlug(slug: string) {
  const fileName = slug + ".tsx"
  const filePath = path.join(componentDir, fileName)
  const fileContent = fs.readFileSync(filePath, "utf8")
  return fileContent
}

export default function Page({ params }: { params: { slug: string } }) {
  const Component = dynamic(() => import(`@/components/${params.slug}.tsx`))
  const code = getComponentCodeBySlug(params.slug)
  return (
    <main>
      <ComponentPreview Component={Component} code={code} />
    </main>
  )
}
