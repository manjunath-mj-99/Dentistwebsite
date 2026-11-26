import Image from 'next/image';
import Link from 'next/link';
import {site} from '@/config/site';
import {Reveal} from '@/components/Reveal';
import {ServiceCard} from '@/components/ServiceCard';
import {FAQAccordion} from '@/components/FAQAccordion';
import {SectionIndicator} from '@/components/SectionIndicator';
import {CountUp} from '@/components/CountUp';
import {ArrowDownRight,ArrowRight,ArrowUpRight,Microscope,ScanLine,ShieldCheck,Sparkles} from '@/components/Icons';

const dentistPhoto='/images/doctor.jpg';
const campPhoto='/images/community-care.svg';

export default function Home(){
  const jsonLd={'@context':'https://schema.org','@type':['Dentist','LocalBusiness'],name:site.name,telephone:site.phone,email:site.email,address:{'@type':'PostalAddress',streetAddress:site.address,addressLocality:'Bengaluru',postalCode:'560040',addressCountry:'IN'},founder:site.doctor};
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <SectionIndicator/>
    <section id="home-0" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span/> Healthy Smiles Start Here: Trusted Dental Care in Chandra Layout.</div>
          <h1 className="hero-title">Advanced Dentistry<br/><em>with a Personal Touch.</em></h1>
          <p>Modern dental care grounded in experience, clear conversations and a focus on preserving your natural smile.</p>
          <div className="hero-actions"><a className="button" href={site.whatsapp} target="_blank" rel="noreferrer">Book on WhatsApp <ArrowUpRight size={16}/></a><Link className="text-link" href="/services">Explore services <ArrowRight size={15}/></Link></div>
          <div className="hero-meta"><div><strong>{site.yearsExperience}+</strong><span>years in practice</span></div><div><strong>BDS</strong><span>Endodontic specialist</span></div><div><strong>Since 1991</strong><span>serving Bengaluru</span></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><Image src={dentistPhoto} alt="Dr. D. Raghunandana smiling in a grey blazer and blue checked shirt" fill priority sizes="(max-width:760px) 80vw, 40vw"/></div>
          <div className="float-chip chip-one"><strong>{site.yearsExperience}+ years</strong>of dental practice</div>
          <div className="float-chip chip-two"><strong>Endodontics</strong>specialist care</div>
          <div className="float-chip chip-three"><strong>Modern tools</strong>for considered care</div>
        </div>
      </div>
      <div className="scroll-cue">Scroll to explore <ArrowDownRight size={14}/></div>
    </section>

    <section className="trust-strip" aria-label="Professional affiliations"><div className="container trust-grid"><span className="trust-label">PROFESSIONAL AFFILIATIONS</span>{site.affiliations.map(x=><span className="trust-name" key={x}>{x}</span>)}</div></section>
    <div className="container counter-grid" aria-label="Clinic experience counters">{site.counters.map(c=><div className="counter" key={c.label}><strong><CountUp value={c.value}/></strong><span>{c.label}</span></div>)}</div>

    <section id="home-1" className="section experience-section"><div className="container two-col">
      <Reveal><div className="portrait"><Image src={dentistPhoto} alt="Dr. D. Raghunandana in a grey blazer and blue checked shirt" fill sizes="(max-width:760px) 90vw, 45vw"/><div className="portrait-caption"><strong>{site.doctor}</strong>{site.credentials} · Specialist in Endodontics</div></div></Reveal>
      <Reveal className="bio-copy" delay={.1}><p className="eyebrow">Experience & care</p><h2>Care shaped by a lifetime in dentistry.</h2><p>Dr. Raghunandana has worked in clinical practice since 1991, bringing a steady, considered approach to diagnosis and treatment. The focus is on listening first and helping each patient understand their options.</p>
      <div className="timeline"><Reveal className="timeline-item"><strong>BDS · Mysore University</strong><span>Graduated 1988</span></Reveal><Reveal className="timeline-item" delay={.08}><strong>Senior Lecturer</strong><span>Chitradurga Dental College · 1989–90</span></Reveal><Reveal className="timeline-item" delay={.16}><strong>Senior Lecturer</strong><span>Chettinad Dental College · 1990–91</span></Reveal><Reveal className="timeline-item" delay={.24}><strong>Private practice</strong><span>Serving patients since 1991</span></Reveal>{site.courses.map((course,i)=><Reveal className="timeline-item" delay={.28+i*.05} key={course.title}><strong>{course.title}</strong><span>{course.detail}</span></Reveal>)}</div>
        <Link className="text-link" href="/about" style={{marginTop:22}}>Meet your dentist <ArrowRight size={15}/></Link>
      </Reveal>
    </div></section>

    <section id="home-2" className="section services-section"><div className="container">
      <Reveal className="section-head-row"><div><h2 className="section-kicker-heading">Care that meets you here</h2><h2 className="section-heading">A considered approach to every smile.</h2><p className="section-intro">Explore care across restorative, preventive and specialty dentistry.</p></div><Link className="text-link" href="/services">All services <ArrowRight size={15}/></Link></Reveal>
      <div className="service-grid">{site.services.map((s,i)=><Reveal key={s.slug} delay={(i%3)*.06}><ServiceCard service={s} index={i}/></Reveal>)}</div>
    </div></section>

    <section id="home-3" className="section dark-section"><div className="container"><Reveal><h3 className="tech-section-kicker">Technology & infrastructure</h3><h2 className="section-heading">Tools that support thoughtful treatment.</h2><p className="section-intro">Modern equipment helps the clinical team examine carefully and explain what they see.</p></Reveal>
      <div className="tech-list">{site.equipment.map((item,i)=><Reveal key={item.name} delay={i*.05}><article className="tech-card"><div className="tech-icon">{[<Microscope key="m"/>,<ScanLine key="s"/>,<Sparkles key="p"/>,<ShieldCheck key="h"/>,<ScanLine key="i"/>][i]}</div><h3>{item.name}</h3><p>{item.benefit}</p></article></Reveal>)}</div>
      <div className="tech-mini-grid">{['2 dental chairs','Warm vertical obturation','Piezo ultrasonic unit','Ultrasonic scaler','Light-curing unit'].map((x,i)=><div className="tech-mini-card" key={x}><span>0{i+1}</span>{x}</div>)}</div>
    </div></section>

    <section id="home-4" className="section"><div className="container"><Reveal><p className="eyebrow">Your treatment journey</p><h2 className="section-heading">A clear path, from hello to aftercare.</h2><p className="section-intro">Every visit starts with listening. Your dentist will explain findings and discuss suitable options.</p></Reveal>
      <div className="steps">{[['01','Consultation','Talk through your concerns and dental history.'],['02','Digital diagnosis','Examination and imaging where needed.'],['03','Treatment plan','Understand the recommended care and alternatives.'],['04','Comfortable treatment','Proceed at a pace that feels right for you.'],['05','Aftercare','Get clear guidance and follow-up support.']].map(x=><Reveal className="step" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></Reveal>)}</div>
    </div></section>

    <section id="home-5" className="section-tight"><div className="container community-panel"><div><h2 className="section-kicker-heading">Care beyond the clinic</h2><h2>Building healthier habits, together.</h2><p>Dr. Raghunandana conducts free dental camps for school children in and around Chandra Layout, sharing practical guidance on oral hygiene and early prevention.</p><Link className="text-link" href="/community">Our community work <ArrowRight size={15}/></Link></div><div className="camp-image"><Image src={campPhoto} alt="Community health education session" fill sizes="(max-width:760px) 90vw, 45vw"/></div></div></section>

    <section id="home-6" className="section"><div className="container faq-layout"><Reveal><p className="eyebrow">Good to know</p><h2 className="section-heading">A few helpful answers.</h2><p className="section-intro">Have another question? Call or message us and we’ll help.</p><Link className="text-link" href="/faq" style={{marginTop:23}}>Visit all FAQs <ArrowRight size={15}/></Link></Reveal><FAQAccordion items={site.faqs.slice(0,6)}/></div></section>

    <section id="home-7" className="cta-band"><div className="container cta-content"><div><p className="eyebrow">Sanjeevni Dental & Endodontic Clinic · Bengaluru</p><h2>Let’s make your next visit a little easier.</h2></div><a className="button" href={site.whatsapp} target="_blank" rel="noreferrer">Book your visit <ArrowUpRight size={16}/></a></div></section>
  </>;
}
