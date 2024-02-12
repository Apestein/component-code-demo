import dynamic from "next/dynamic"

export default function Page({ params }: { params: { slug: string } }) {
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
    <main className="bg-black text-white min-h-screen">
      <Component />
      <ExampleCode />
    </main>
  )
}
