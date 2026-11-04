import { Users } from 'lucide-react'
import { projects } from '../data/portfolio'
import Flower from './Flower'
import Reveal from './Reveal'

export default function Projects({ onOpen }) {
  return (
    <section id="projects" className="section section--cream">
      <Flower className="section__flower section__flower--tr" size={58} petal="#F6D4D5" center="#FBE8A6" duration={9} delay={-1} amp={9} />
      <Flower className="section__flower section__flower--bl" size={44} variant="b" petal="#BFE6DE" center="#F6D4D5" duration={7} delay={-3} amp={7} />
      <div className="container">
        <Reveal><h2 className="section__title">Featured Projects</h2></Reveal>
        <Reveal delay={80}><p className="section__lead">Three academic group projects. Select one to see the details.</p></Reveal>
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.id} className="reveal--fill">
              <article className={`card project project--${i % 2 ? 'b' : 'a'}`}>
                <button className="project__thumb" onClick={() => onOpen(p)} aria-label={`View details of ${p.name}`}>
                  <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
                </button>
                <div className="project__body">
                  <span className="chip chip--cream"><Users size={14} /> Group project</span>
                  <h3>{p.name}</h3>
                  <p className="project__sub">{p.subtitle}</p>
                  <p>{p.short}</p>
                  <button className="btn btn--forest" onClick={() => onOpen(p)}>View details</button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
