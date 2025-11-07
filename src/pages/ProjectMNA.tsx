
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function Page() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100'>
      <div className='section'>
        <div className='section-stripe'></div>
        <h1 className='section-title'>Simulating Company Merger/Acquisition</h1>
        <p className='text-center opacity-80'>Monte Carlo valuation with accretion probability and sensitivity.</p>

        <div className='grid grid-cols-1 gap-4 mt-6'>
          <Card>
            <CardHeader><CardTitle>Highlights</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Valuation under uncertainty</li><li>Accretion probability curve</li><li>Sensitivity: WACC & synergy levels</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>System & Approach</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <h3 className='text-xl font-semibold mt-4 mb-2'>Overview</h3><p className='opacity-90 text-sm leading-relaxed'>Estimate EV distribution by sampling demand, margin, cost shocks, and integration timelines. Compute P(Accretive) across synergy scenarios.</p><h3 className='text-xl font-semibold mt-4 mb-2'>Modeling</h3><p className='opacity-90 text-sm leading-relaxed'>Discount FCFs with WACC; model synergies as additive lift with triangular distributions; stress test cost inflation.</p><h3 className='text-xl font-semibold mt-4 mb-2'>Evaluation</h3><p className='opacity-90 text-sm leading-relaxed'>Stability across seeds; KS-tests on sampled drivers; histogram/CDF of EV; Tornado chart for sensitivity.</p><h3 className='text-xl font-semibold mt-4 mb-2'>Path to Prod</h3><p className='opacity-90 text-sm leading-relaxed'>Notebook → package with CLI: mna simulate --trials 10000 --synergy mid (CSV + charts).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Pseudo-code</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`for i in range(N_TRIALS):\n    demand = sample_demand()\n    margin = sample_margin()\n    costs  = sample_costs()\n    synergy = sample_synergy(level='mid')\n    fcf = project_fcf(demand, margin, costs, synergy)\n    ev = discount(fcf, wacc=WACC)\n    store(ev)\naccretive_p = (EV > acq_cost).mean()`}</code></pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Repo Structure</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`mna/\n├─ data/\n├─ mna/\n│  ├─ __init__.py\n│  ├─ simulate.py\n│  ├─ dists.py\n│  └─ charts.py\n├─ notebooks/\n└─ cli.py`}</code></pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Results (sample)</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`EV p05–p95:   $120M – $210M\nP(Accretive): 0.68 ± 0.03 (mid synergy)\nTop drivers:  synergy, WACC, demand growth`}</code></pre>
            </CardContent>
          </Card>
        </div>

        <div className='text-center mt-6'>
          <Link to='/' className='underline'>← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
