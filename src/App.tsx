
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Routes, Route, Link } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Mail, Github, Linkedin, ArrowRight, Cpu, LineChart, Boxes, Sun, Moon, Menu, X } from 'lucide-react'
import ProjectMNA from './pages/ProjectMNA'
import ProjectBank from './pages/ProjectBank'
import ProjectStock from './pages/ProjectStock'
import ProjectADAS from './pages/ProjectADAS'

const TITLE = 'AI/ML Engineer'
const LOCATION = 'Chicago, IL'
const EMAIL = '	smit@itjobinbox.com'
const GITHUB = 'https://github.com/smitpatel49'
const LINKEDIN = 'https://www.linkedin.com/in/smitpatel7/'
const FORM_ENDPOINT = ''

const skills = [
  'Python','Pandas','NumPy','LightGBM','XGBoost','Transformers (BERT/GPT)','TensorFlow','PyTorch',
  'FastAPI','Flask','Docker','AWS SageMaker','MLflow','Prometheus/Grafana','Plotly','Tableau','Power BI',
]

const experiences = [
  { company: 'Cigna', role: 'AI/ML Engineer', period: 'Jun 2023 – Present', location: 'Illinois (Hybrid)',
    bullets: [
      'Deployed ML pipeline to predict patient readmission; reduced readmissions by 15%.',
      'Fine-tuned BERT/GPT models to extract medical entities; cut manual data entry by 40%.',
      'Built anomaly detection (Isolation Forest/Autoencoders); lowered fraudulent claims by ~20%.',
      'Set up MLOps with MLflow, Docker, AWS SageMaker; live monitoring via Prometheus.',
    ], tags: ['NLP','Anomaly Detection','MLOps'] },
  { company: 'Infinite Infolab', role: 'ML Engineer', period: 'Jul 2020 – Aug 2021', location: 'India (Onsite)',
    bullets: [
      'Built churn model (LightGBM) with Bayesian tuning; improved campaign targeting by 22%.',
      'Deployed real-time inference with FastAPI + Docker; cut latency by 35%.',
      'Created dashboards in Plotly/Seaborn; accelerated stakeholder decisions.',
    ], tags: ['Churn','Deployment','Visualization'] },
]

const projects = [
  { slug:'mna', title: 'Simulating Company Merger/Acquisition', summary: 'Monte Carlo valuation; accretion probability & sensitivity.', tech:['Python','Pandas','NumPy','Monte Carlo','Matplotlib'] },
  { slug:'bank', title: 'Bank Marketing Classification', summary: 'XGBoost/Random Forest/SVM with calibration and a FastAPI scoring endpoint.', tech:['Python','XGBoost','scikit-learn','SVM','FastAPI'] },
  { slug:'stock', title: 'Simulating a Buy/Sell Call for a Stock', summary: 'Bootstrapped scenarios; VaR and scenario fan charts.', tech:['Python','Pandas','NumPy','Time Series','Backtesting'] },
  { slug:'adas', title: 'Lane & Road-Sign Detection for Self-Driving', summary: 'Lane segmentation + sign detection fused into control logic for speed & collision avoidance.', tech:['Python','OpenCV','PyTorch','Segmentation','Object Detection'] },
]

const Section=({id,title,children}:{id:string;title:string;children:React.ReactNode})=>(
  <section id={id} className='section'>
    <div className='section-stripe'></div>
    <motion.h2 initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.5}} transition={{duration:0.5}} className='section-title'>{title}</motion.h2>
    {children}
  </section>
)

const Pill=({children}:{children:React.ReactNode})=>(<span className='text-xs md:text-sm rounded-full border px-3 py-1 bg-white/60 dark:bg-white/5 backdrop-blur'>{children}</span>)

const ThemeToggle = () => {
  const getInitial = () => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };
  const [dark, setDark] = useState(getInitial());

  useEffect(() => {
    const r = document.documentElement;
    if (dark) {
      r.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      (document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null)?.setAttribute('content','#0a0a0a');
    } else {
      r.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      (document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null)?.setAttribute('content','#ffffff');
    }
  }, [dark]);

  return (
    <Button variant='ghost' size='icon' aria-label='Toggle theme' className='ring-1 ring-neutral-200 dark:ring-neutral-800 hover:ring-accent-400/60 w-10 h-10' onClick={() => setDark(!dark)}>
      {dark ? <Sun className='w-6 h-6' strokeWidth={2.2}/> : <Moon className='w-6 h-6' strokeWidth={2.2}/>}
    </Button>
  );
};





const MobileMenu = ({open,onClose}:{open:boolean;onClose:()=>void}) => {
  React.useEffect(()=>{
    if(open){ document.body.classList.add('overflow-hidden') }
    return ()=>{ document.body.classList.remove('overflow-hidden') }
  },[open])

  if(!open) return <></>

  return (
    <div className='fixed inset-0 z-[100] xl:hidden'>
      <motion.div
        className='absolute inset-0 bg-black/50'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        onClick={onClose}
      />
      <motion.div
        className='fixed top-0 left-0 h-screen w-screen bg-white dark:bg-neutral-900 p-5 overflow-y-auto flex flex-col'
        initial={{x:-320}}
        animate={{x:0}}
        exit={{x:-320}}
        transition={{type:'tween',duration:0.25}}
      >
        <div className='flex items-center justify-between mb-4'>
          <div className='font-semibold text-base'>Menu</div>
          <button onClick={onClose} className='rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800'>
            <X className='w-6 h-6'/>
          </button>
        </div>
        <nav className='grid text-base rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800'>
          <a href='/' onClick={onClose} className='px-4 py-3 bg-white/60 dark:bg-neutral-900/60 hover:bg-neutral-50 dark:hover:bg-neutral-800'>Home</a>
          <a href='/#about' onClick={onClose} className='px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800'>About</a>
          <a href='/#playground' onClick={onClose} className='px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800'>Playground</a>
          <a href='/#case-studies' onClick={onClose} className='px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800'>Case Studies</a>
          <a href='/#projects' onClick={onClose} className='px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800'>Projects</a>
          <a href='/#skills' onClick={onClose} className='px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800'>Skills</a>
          <a href='/#contact' onClick={onClose} className='px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800'>Contact</a>
        </nav>
        <div className='mt-6 flex flex-col gap-2'>
          <a href={'mailto:'+EMAIL} onClick={onClose} className='flex items-center gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800'>
            <Mail className='w-5 h-5'/><span>Email</span>
          </a>
          <a href={GITHUB} target='_blank' rel='noreferrer' onClick={onClose} className='flex items-center gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800'>
            <Github className='w-5 h-5'/><span>GitHub</span>
          </a>
          <a href={LINKEDIN} target='_blank' rel='noreferrer' onClick={onClose} className='flex items-center gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800'>
            <Linkedin className='w-5 h-5'/><span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

const BackgroundParticles=()=>{
  const ref = useRef<HTMLCanvasElement|null>(null)
  useEffect(()=>{
    const c=ref.current!; const x=c.getContext('2d')!
    let w=(c.width=window.innerWidth), h=(c.height=420)
    const onR=()=>{ w=(c.width=window.innerWidth); h=(c.height=420) }
    window.addEventListener('resize', onR)
    type P={x:number;y:number;vx:number;vy:number;r:number}
    const pts:P[] = Array.from({length:60},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5)*0.7,vy:(Math.random()-0.5)*0.7,r:Math.random()*2+0.6}))
    let mx=-9999,my=-9999; const onM=(e:MouseEvent)=>{ const r=c.getBoundingClientRect(); mx=e.clientX-r.left; my=e.clientY-r.top }
    c.addEventListener('mousemove', onM)
    let af=0
    const loop=()=>{ x.clearRect(0,0,w,h); for(let i=0;i<pts.length;i++){ const p=pts[i]; p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>w) p.vx*=-1; if(p.y<0||p.y>h) p.vy*=-1; x.fillStyle='rgba(120,120,120,0.55)'; x.beginPath(); x.arc(p.x,p.y,p.r,0,Math.PI*2); x.fill(); for(let j=i+1;j<pts.length;j++){ const q=pts[j]; const dx=p.x-q.x, dy=p.y-q.y; const d=Math.hypot(dx,dy); if(d<110){ x.strokeStyle='rgba(120,120,120,0.15)'; x.beginPath(); x.moveTo(p.x,p.y); x.lineTo(q.x,q.y); x.stroke(); } } const dm=Math.hypot(p.x-mx,p.y-my); if(dm<120){ x.strokeStyle='rgba(120,120,120,0.25)'; x.beginPath(); x.moveTo(p.x,p.y); x.lineTo(mx,my); x.stroke(); } } af=requestAnimationFrame(loop) }
    loop()
    return ()=>{ cancelAnimationFrame(af); window.removeEventListener('resize', onR); c.removeEventListener('mousemove', onM) }
  },[])
  return <canvas ref={ref} className='absolute inset-0 h-[420px] w-full -z-10'/>
}

const Header=()=>{
  const [open,setOpen]=useState(false)
  return (
    <div className='sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/40 dark:bg-neutral-900/60 border-b'>
      <div className='container-narrow h-14 grid grid-cols-[auto,1fr,auto] items-center gap-3'>
        <button onClick={()=>setOpen(true)} className='xl:hidden rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800'>
          <Menu className='w-6 h-6'/>
        </button>
        <nav className='hidden xl:flex justify-center gap-5 text-sm whitespace-nowrap'>
          <a href='/' className='opacity-80 hover:opacity-100'>Home</a>
          <a href='/#about' className='opacity-80 hover:opacity-100'>About</a>
          <a href='/#playground' className='opacity-80 hover:opacity-100'>Playground</a>
          <a href='/#case-studies' className='opacity-80 hover:opacity-100'>Case Studies</a>
          <a href='/#projects' className='opacity-80 hover:opacity-100'>Projects</a>
          <a href='/#skills' className='opacity-80 hover:opacity-100'>Skills</a>
          <a href='/#contact' className='opacity-80 hover:opacity-100'>Contact</a>
        </nav>
        <div className='justify-self-end flex items-center gap-2'>
          <ThemeToggle/>
          <a href={'mailto:'+EMAIL}><Button variant='ghost' size='icon' className='ring-1 ring-neutral-200 dark:ring-neutral-800 hover:ring-accent-400/60 w-10 h-10'><Mail className='w-6 h-6' strokeWidth={2.1}/></Button></a>
          <a href={GITHUB} target='_blank' rel='noreferrer'><Button variant='ghost' size='icon' className='ring-1 ring-neutral-200 dark:ring-neutral-800 hover:ring-accent-400/60 w-10 h-10'><Github className='w-6 h-6' strokeWidth={2.1}/></Button></a>
          <a href={LINKEDIN} target='_blank' rel='noreferrer'><Button variant='ghost' size='icon' className='ring-1 ring-neutral-200 dark:ring-neutral-800 hover:ring-accent-400/60 w-10 h-10'><Linkedin className='w-6 h-6' strokeWidth={2.1}/></Button></a>
        </div>
        <MobileMenu open={open} onClose={()=>setOpen(false)} />
      </div>
    </div>
  )
}

const Hero=()=>(
  <section id='home' className='container-narrow pt-12 pb-6 relative text-center'>
    <BackgroundParticles/>
    <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className='flex flex-col gap-6'>
      <div className='flex items-center justify-center'>
        <div>
          <h1 className='text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent'>Smit Patel</h1>
          <p className='mt-2 text-[15px] md:text-[17px] opacity-80'>{TITLE} · {LOCATION}</p>
        </div>
      </div>
      <p className='text-[15px] md:text-[17px] leading-relaxed opacity-90 text-just'>I build reliable, production-grade ML systems end-to-end — from data pipelines and modeling to deployment, monitoring, and product impact. Target roles: AI/ML Engineer and Data Scientist. Work spans forecasting & simulation, computer vision, NLP, and decisioning with a strong MLOps backbone.</p>
      <div className='flex gap-3 justify-center flex-wrap'>
        <a href='#projects'><Button className='group'>View Projects <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform'/></Button></a>
        <a href='/Smit-Resume.pdf' target='_blank' rel='noreferrer'><Button variant='secondary'>Download Resume</Button></a>
        <a href={'mailto:'+EMAIL}><Button variant='outline'>Email me</Button></a>
      </div>
      <div className='flex gap-2 flex-wrap mt-2 justify-center'>{['NLP','Time-Series','MLOps','Real-time Inference','Dashboards'].map((t,i)=>(<Pill key={i}>{t}</Pill>))}</div>
    </motion.div>
  </section>
)

const Home=()=> (
  <div className='min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100'>
    <Header/>
    <Hero/>

    <div>
      <Section id='about' title='About' className='section-bg'>
          <div className='max-w-5xl mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 gap-6 text-sm leading-relaxed'>
          <div className='space-y-4 text-center'>
            <p className='text-just'>I’m an AI/ML engineer who enjoys taking ambiguous, real‑world problems and turning them into dependable systems. I’ve shipped models and services across healthcare and analytics — spanning forecasting & simulation, risk and marketing decisioning, NLP, and computer vision — with clear SLAs and ownership over data, modeling, and runtime.</p>
            <p className='text-just'>My toolkit includes Python (NumPy/Pandas, scikit‑learn, PyTorch), modern MLOps (FastAPI, Docker, MLflow, SageMaker), and pragmatic product metrics. I value iteration speed, observability, and making models legible to the business.</p>
          </div>
          <div>
            <Card>
              <CardHeader><CardTitle className='text-base'>Quick Facts</CardTitle></CardHeader>
              <CardContent className='text-sm space-y-2'>
                <div className='flex items-center gap-2'><Boxes className='w-4 h-4'/> End-to-end: data → model → API → monitoring</div>
                <div className='flex items-center gap-2'><LineChart className='w-4 h-4'/> Domains: forecasting/simulation, CV, NLP, decisioning</div>
                <div className='flex items-center gap-2'><Cpu className='w-4 h-4'/> Ops: CI/CD, containerization, metrics, alerts</div>
              </CardContent>
            </Card>
          </div>
        </div>
      
          </div>
      </Section>
    </div>

    <Section id='playground' title='Interactive Playground' className='section-bg'>
          <div className='max-w-5xl mx-auto px-4 sm:px-6'>
      <div className='grid grid-cols-1 gap-4'>
        <Card className='hover:shadow-md transition-shadow'>
          <CardHeader><CardTitle>Churn Scoring Simulator</CardTitle></CardHeader>
          <CardContent className='text-sm space-y-3'>
            <ChurnDemo />
          </CardContent>
        </Card>
        <Card className='hover:shadow-md transition-shadow'>
          <CardHeader><CardTitle>Quick NER Demo</CardTitle></CardHeader>
          <CardContent className='text-sm space-y-3'>
            <NerDemo />
          </CardContent>
        </Card>
      </div>
    
          </div>
      </Section>

    <div>
      
<div>
  <Section id='case-studies' title='Case Studies (Impact)' className='section-bg'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6'>
          <div className='grid grid-cols-1 gap-5'>
            {/* Cigna */}
            <div className='glass transition-shadow hover:shadow-md hover:ring-1 hover:ring-accent-500/25 p-5 rounded-2xl'>
              <div className='flex items-start justify-between border-b border-neutral-200/60 dark:border-neutral-800/60 pb-3 mb-3'>
                <h3 className='text-lg font-semibold'>Cigna</h3>
                <div className='text-sm opacity-70'>Jun 2023 – Present</div>
              </div>
              <ul className='list-disc pl-6 space-y-2 text-sm'>
                <li>Deployed ML pipeline to predict patient readmission; reduced readmissions by 15%.</li>
                <li>Fine-tuned BERT/GPT models to extract medical entities; cut manual data entry by 40%.</li>
                <li>Built anomaly detection (Isolation Forest/Autoencoders); lowered fraudulent claims by ~20%.</li>
                <li>Set up MLOps with MLflow, Docker, AWS SageMaker; live monitoring via Prometheus.</li>
              </ul>
              <div className='mt-3 text-xs opacity-70'>Focus: NLP · Anomaly Detection · MLOps</div>
            </div>

            {/* Infinite Infolab */}
            <div className='glass transition-shadow hover:shadow-md hover:ring-1 hover:ring-accent-500/25 p-5 rounded-2xl'>
              <div className='flex items-start justify-between border-b border-neutral-200/60 dark:border-neutral-800/60 pb-3 mb-3'>
                <h3 className='text-lg font-semibold'>Infinite Infolab</h3>
                <div className='text-sm opacity-70'>Jul 2020 – Aug 2021</div>
              </div>
              <ul className='list-disc pl-6 space-y-2 text-sm'>
                <li>Built churn model (LightGBM) with Bayesian tuning; improved campaign targeting by 22%.</li>
                <li>Deployed real-time inference with FastAPI + Docker; cut latency by 35%.</li>
                <li>Created dashboards in Plotly/Seaborn; accelerated stakeholder decisions.</li>
              </ul>
              <div className='mt-3 text-xs opacity-70'>Focus: Churn · Deployment · Visualization</div>
            </div>
          </div>
        </div>
      </Section>
</div>

<Section id='projects' title='Selected Projects' className='section-bg'>
          <div className='max-w-5xl mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 gap-4'>
          {projects.map((p,i) => (
            <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.5}}>
              <Card className='hover:shadow-md transition-shadow'>
                <CardHeader><CardTitle className='flex items-center gap-2'><LineChart className='w-5 h-5'/><span>{p.title}</span></CardTitle></CardHeader>
                <CardContent className='text-sm space-y-4 text-left'>
                  <p className='opacity-90'>{p.summary}</p>
                  <div className='flex gap-2 flex-wrap'>{p.tech.map((t,j)=>(<Badge key={j} variant='outline'>{t}</Badge>))}</div>
                  <div><Link to={'/projects/'+p.slug} className='inline-flex items-center gap-2 underline'>Read full case study <ArrowRight className='w-4 h-4'/></Link></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      
          </div>
      </Section>
    </div>

    <Section id='skills' title='Skills' className='section-bg'>
          <div className='max-w-5xl mx-auto px-4 sm:px-6'>
      <div className='flex flex-wrap gap-2 justify-center'>{skills.map((s,i)=>(<Badge key={i} variant='secondary' className='text-sm'>{s}</Badge>))}</div>
    
          </div>
      </Section>

    <Section id='contact' title='Contact' className='section-bg'>
          <div className='max-w-5xl mx-auto px-4 sm:px-6'>
      <div className='grid grid-cols-1 gap-6'>
        <div className='w-full'>
          {/* To enable Formspree: set FORM_ENDPOINT to your endpoint */}
          <form method={FORM_ENDPOINT ? 'POST' : 'GET'} action={FORM_ENDPOINT ? FORM_ENDPOINT : ('mailto:'+EMAIL)} className='space-y-3'>
            <div className='grid grid-cols-1 gap-3'>
              <input name='name' placeholder='Name' className='rounded-xl border p-3 bg-transparent' required/>
              <input name='email' type='email' placeholder='Email' className='rounded-xl border p-3 bg-transparent' required/>
            </div>
            <input name='subject' placeholder='Subject (optional)' className='rounded-xl border p-3 bg-transparent w-full'/>
            <textarea name='message' placeholder='Your message' className='rounded-xl border p-3 bg-transparent w-full h-32' required/>
            {FORM_ENDPOINT && <input type='hidden' name='_subject' value='New message from portfolio site'/>}
            <button className='bg-accent-600 text-white hover:bg-accent-700 rounded-2xl px-4 py-2 text-sm'>Send message</button>
          </form>
        </div>
        <div className='w-full flex flex-col items-center gap-3'>
          <a className='inline-flex items-center gap-2 underline' href={'mailto:'+EMAIL}><Mail className='w-5 h-5'/> {EMAIL}</a>
          <a className='inline-flex items-center gap-2 underline' href={GITHUB} target='_blank' rel='noreferrer'><Github className='w-5 h-5'/> GitHub</a>
          <a className='inline-flex items-center gap-2 underline' href={LINKEDIN} target='_blank' rel='noreferrer'><Linkedin className='w-5 h-5'/> LinkedIn</a>
        </div>
      </div>
    
          </div>
      </Section>

    <footer className='container-narrow pb-16 text-xs opacity-60 text-center'>© 2025 Smit Patel</footer>
  </div>
)

function sigmoid(x:number){ return 1/(1+Math.exp(-x)) }
function ChurnDemo(){
  const [tenure,setTenure]=useState(6)
  const [monthly,setMonthly]=useState(60)
  const [tickets,setTickets]=useState(3)
  const score = sigmoid(-1.4 + (12 - tenure)*0.18 + (monthly - 50)*0.02 + tickets*0.25)
  const pct = Math.round(score*100)
  return (
    <div>
      <div className='grid grid-cols-1 gap-3 items-center'>
        <label className='text-xs'>Tenure (months)</label>
        <input className='w-full' type='range' min={1} max={24} value={tenure} onChange={(e)=>setTenure(Number(e.target.value))}/>
        <label className='text-xs'>Monthly Spend ($)</label>
        <input className='w-full' type='range' min={10} max={200} value={monthly} onChange={(e)=>setMonthly(Number(e.target.value))}/>
        <label className='text-xs'>Support Tickets (30d)</label>
        <input className='w-full' type='range' min={0} max={10} value={tickets} onChange={(e)=>setTickets(Number(e.target.value))}/>
      </div>
      <div className='mt-4 text-sm'>Churn Probability: <span className='font-medium'>{pct}%</span></div>
      <div className='h-2 rounded bg-neutral-200 dark:bg-neutral-800 mt-2'><div className='h-2 rounded bg-neutral-900 dark:bg-neutral-100' style={{ width: String(pct) + '%' }} /></div>
      <div className='mt-3 text-xs opacity-70'>*Heuristic demo; production used LightGBM features.</div>
    </div>
  )
}

function extractNER(t:string){
  const res: {text:string;label:string}[] = []
  const push=(m:RegExpMatchArray|null,label:string)=>{ if(!m) return; m.forEach(v=>res.push({text:v,label})) }
  push(t.match(/\b\d{4}-\d{2}-\d{2}\b/g), 'DATE')
  push(t.match(/\bCigna\b/g), 'ORG')
  push(t.match(/\b\d{3}-\d{2}\b/g), 'CLAIM_ID')
  push(t.match(/\b[A-Z][a-z]+\s[A-Z][a-z]+\b/g), 'PERSON')
  return res
}
function NerDemo(){
  const [text,setText] = useState('Smit Patel visited Cigna on 2025-02-17 about claim 000-01.')
  const ents = extractNER(text)
  return (
    <div>
      <textarea className='w-full h-28 p-2 rounded border bg-transparent' value={text} onChange={(e)=>setText(e.target.value)} />
      <div className='mt-3 text-sm leading-relaxed'>
        {ents.map((e,i)=>(<span key={i} className='px-1.5 py-0.5 rounded-md border mr-1'>{e.text} <span className='opacity-60 text-xs'>{e.label}</span></span>))}
      </div>
      <div className='mt-2 text-xs opacity-70'>Rule-based preview; production used BERT/GPT fine-tuning.</div>
    </div>
  )
}

export default function App(){
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/projects/mna' element={<ProjectMNA/>} />
      <Route path='/projects/bank' element={<ProjectBank/>} />
      <Route path='/projects/stock' element={<ProjectStock/>} />
      <Route path='/projects/adas' element={<ProjectADAS/>} />
    </Routes>
  )
}
