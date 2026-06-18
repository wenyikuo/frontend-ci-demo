import Counter from '@/components/Counter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-3xl font-bold">Frontend CI Demo</h1>
      <Counter initial={0} />
    </main>
  )
}
