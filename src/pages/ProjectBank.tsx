
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function Page() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100'>
      <div className='section'>
        <div className='section-stripe'></div>
        <h1 className='section-title'>Bank Marketing Classification</h1>
        <p className='text-center opacity-80'>XGBoost/Random Forest/SVM with calibration and a FastAPI scoring endpoint.</p>

        <div className='grid grid-cols-1 gap-4 mt-6'>
          <Card>
            <CardHeader><CardTitle>Highlights</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <ul className='list-disc pl-5 space-y-2'>
                <li>AUC/PR lift vs baseline</li><li>Calibrated probabilities</li><li>Deployment-ready scoring API</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>System & Approach</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <h3 className='text-xl font-semibold mt-4 mb-2'>Features</h3><p className='opacity-90 text-sm leading-relaxed'>One-hot/cat encoding, campaign recency/frequency, interaction terms for product × region.</p><h3 className='text-xl font-semibold mt-4 mb-2'>Models</h3><p className='opacity-90 text-sm leading-relaxed'>XGBoost tuned via CV; RF baseline; linear SVM contrast; Platt/Isotonic calibration.</p><h3 className='text-xl font-semibold mt-4 mb-2'>Serving</h3><p className='opacity-90 text-sm leading-relaxed'>FastAPI endpoint /predict; logs inputs & probabilities; optional threshold by queue capacity.</p><h3 className='text-xl font-semibold mt-4 mb-2'>MLOps</h3><p className='opacity-90 text-sm leading-relaxed'>Dockerfile + CI; can wire Prometheus counters for traffic and latency.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Pseudo-code</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`X = build_features(df)\nxgb = XGBoost(params).fit(X_train, y_train)\ny_hat = xgb.predict_proba(X_valid)[:,1]\ny_cal = calibrate(y_hat, method='isotonic')\nsave_model(xgb, 'model.bin'); save_calibrator(...)`}</code></pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Repo Structure</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`bank_marketing/\n├─ data/\n├─ features.py\n├─ train.py\n├─ serve/\n│  ├─ app.py (FastAPI)\n│  └─ schemas.py\n└─ Dockerfile`}</code></pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Results (sample)</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`AUC: 0.87 (↑ from 0.76 baseline)\nPR-AUC: 0.62 (↑ from 0.41)\nBrier: 0.094\nSuggested threshold: 0.31 (capacity 250/hr)`}</code></pre>
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
