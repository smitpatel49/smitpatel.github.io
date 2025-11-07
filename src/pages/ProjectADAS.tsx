
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function Page() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100'>
      <div className='section'>
        <div className='section-stripe'></div>
        <h1 className='section-title'>Lane & Road-Sign Detection for Self-Driving</h1>
        <p className='text-center opacity-80'>Lane segmentation and sign detection fused into control logic for speed and collision avoidance.</p>

        <div className='grid grid-cols-1 gap-4 mt-6'>
          <Card>
            <CardHeader><CardTitle>Highlights</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Robust lane tracking</li><li>Sign-aware speed control</li><li>Collision avoidance logic</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>System & Approach</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <h3 className='text-xl font-semibold mt-4 mb-2'>Data</h3><p className='opacity-90 text-sm leading-relaxed'>Lane datasets (TuSimple-like) + traffic-sign datasets (speed/stop/yield).</p><h3 className='text-xl font-semibold mt-4 mb-2'>Models</h3><p className='opacity-90 text-sm leading-relaxed'>UNet/ENet for lanes (segmentation); YOLO/Faster R-CNN for signs (detection).</p><h3 className='text-xl font-semibold mt-4 mb-2'>Fusion</h3><p className='opacity-90 text-sm leading-relaxed'>Compute lane offset/curvature → steer; parse sign class → set target speed; emergency brake on collision risk.</p><h3 className='text-xl font-semibold mt-4 mb-2'>Controller</h3><p className='opacity-90 text-sm leading-relaxed'>PID controller on lateral error; velocity profile constrained by sign + obstacle TTL.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Pseudo-code</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`lane_mask = lane_seg(image)\nsigns = sign_detect(image)\noffset, curvature = lane_geometry(lane_mask)\ntarget_speed = policy_from_signs(signs)\nsteer = PID(offset, curvature)\naccel = speed_controller(current_speed, target_speed)`}</code></pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Repo Structure</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`adas/\n├─ datasets/\n├─ seg/\n│  ├─ model.py\n│  └─ train.py\n├─ det/\n│  ├─ yolo.py\n│  └─ train.py\n├─ fusion.py\n├─ control.py\n└─ eval.py`}</code></pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Results (sample)</CardTitle></CardHeader>
            <CardContent className='text-sm'>
              <pre><code>{`Lane F1: 0.89 (day/dry), 0.76 (dusk/wet)\nSign mAP@0.5: 0.82\nClosed-loop: No-collision in 98.7% of 10k sim rollouts (urban/day)`}</code></pre>
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
