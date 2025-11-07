
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function Page() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100'>
      <div className='section'>
        <div className='section-stripe'></div>
        <h1 className='section-title'>Simulating a Buy/Sell Call for a Stock</h1>
        <p className='text-center opacity-80'>Scenario simulation with regime-aware volatility; VaR and fan charts.</p>

        <div className='grid grid-cols-1 gap-4 mt-6'>
          <Card>
            <CardHeader><CardTitle>Highlights</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Expected return & VaR</li><li>Scenario fan charts</li><li>Heuristic buy/sell signal</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>System & Approach</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <h3 className='text-xl font-semibold mt-4 mb-2'>Signals</h3><p className='opacity-90 text-sm leading-relaxed'>Regime filter from rolling volatility; momentum lookbacks; mean-reversion limiter.</p><h3 className='text-xl font-semibold mt-4 mb-2'>Backtest</h3><p className='opacity-90 text-sm leading-relaxed'>Walk-forward; transaction costs; position sizing by risk budget.</p><h3 className='text-xl font-semibold mt-4 mb-2'>Visualization</h3><p className='opacity-90 text-sm leading-relaxed'>Fan chart of future paths; drawdown curves; VaR/CVaR at 95%.</p><h3 className='text-xl font-semibold mt-4 mb-2'>Policy</h3><p className='opacity-90 text-sm leading-relaxed'>Buy if ER {'>'} hurdle and VaR within limit; else hold/sell.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Pseudo-code</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`paths = bootstrap_paths(returns, n=1000, regime=detect_regime(returns))\nproj = paths.cumsum(axis=1)\ner = proj[:,-1].mean(); var95 = np.percentile(proj[:,-1], 5)\nsignal = 'BUY' if (er > target and var95 > -max_loss) else ('HOLD' if er > -0.01 else 'SELL')`}</code></pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Repo Structure</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`stock_sim/\n├─ data/\n├─ regimes.py\n├─ simulate.py\n├─ backtest.py\n└─ charts.py`}</code></pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Results (sample)</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`90d Expected Return: +4.2%\n90d VaR(95): -7.8%\nSignal: BUY (meets ER hurdle; within risk budget)`}</code></pre>
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
