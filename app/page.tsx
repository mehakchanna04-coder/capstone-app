const FILLED = 86;

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="grid items-center gap-10 py-10 md:grid-cols-[3fr_2fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-[#A3263B]">
            CS graduate · FlyRank intern
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            I take an AI idea all the way to a working app.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[#5A6172]">
            Proof: a farmer guidance app — 86% crop prediction accuracy, graded
            95 (A-), tested with real farmers. It runs on my phone right now.
          </p>
          
           <a href="/contact" className="mt-8 inline-block rounded bg-[#A3263B] px-5 py-2.5 font-medium text-white hover:bg-[#8A1F32]">
            Email me
          </a>
        </div>

        <figure aria-label="86 out of 100 plots filled, visualizing 86% accuracy">
          <div className="grid w-fit grid-cols-10 gap-1.5">
            {Array.from({ length: 100 }, (_, i) => (
              <span
                key={i}
                className={`h-4 w-4 rounded-[3px] md:h-5 md:w-5 ${
                  i < FILLED ? "bg-[#A3263B]" : "bg-[#E7DFD2]"
                }`}
              />
            ))}
          </div>
          <figcaption className="mt-3 text-sm text-[#5A6172]">
            86 of 100 — crop prediction accuracy
          </figcaption>
        </figure>
      </div>
    </main>
  );
}