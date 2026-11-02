import { Users } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects({ onOpen }) {
  return (
    <section id="projects" className="section section--cream">
      <div className="container">
        <h2 className="section__title">Featured Projects</h2>
        <p className="section__lead">Three academic group projects. Select one to see the details.</p>
        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.id} className={`card project project--${i % 2 ? 'b' : 'a'}`}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
