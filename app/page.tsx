export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">I take an AI idea all the way to a working app.</h1>
      <p className="mt-2 max-w-xl text-gray-600">
        Proof: a farmer guidance app with 86% crop prediction accuracy, graded 95 (A-),
        tested with real farmers — and it runs on my phone.
      </p>
      <a href="/contact" className="mt-6 inline-block rounded bg-slate-900 px-4 py-2 text-white">
        Email me
      </a>
    </main>
  )
}