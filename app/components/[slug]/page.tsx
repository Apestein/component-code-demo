// import fs from "fs"
// import path from "path"
// import { ComponentPreview } from "./component-preview"
import dynamic from "next/dynamic"

// const componentDir = path.join(process.cwd(), "components")

// function getComponentCodeBySlug(slug: string) {
//   const fileName = slug + ".tsx"
//   const filePath = path.join(componentDir, fileName)
//   const fileContent = fs.readFileSync(filePath, "utf8")
//   return fileContent
// }

export default function Page({ params }: { params: { slug: string } }) {
  // const code = getComponentCodeBySlug(params.slug)
  const Component = dynamic(() =>
    import(`@/components/examples/${params.slug}`).then(
      (mod) => mod.Component1Example
    )
  )
  const ExampleCode = dynamic(() =>
    import(`@/components/examples/${params.slug}`).then(
      (mod) => mod.ExampleCode
    )
  )

  return (
    <main>
      <Component />
      <ExampleCode />
    </main>
  )
}
