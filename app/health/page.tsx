export default async function HealthPage() {
  const res = await fetch('https://api.github.com/repos/mehakchanna04-coder/capstone-app', {
    next: { revalidate: 60 },
  })
  const repo = await res.json()

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Health check</h1>
      <p className="mt-2 text-green-600">App is running ✅</p>
      <p className="mt-4 text-sm text-gray-600">
        Live fetch test — repo &quot;{repo.name ?? 'capstone-app'}&quot; last pushed: {repo.pushed_at ?? 'n/a'}
      </p>
    </main>
  )
}