import { Code2, Database, Smartphone, Palette } from 'lucide-react'
import { skillGroups } from '../data/portfolio'

const icons = { code: Code2, database: Database, phone: Smartphone, palette: Palette }

export default function Skills() {
  return (
    <section id="skills" className="section section--mint">
      <div className="container">
        <h2 className="section__title">Technical Skills</h2>
        <p className="section__lead">The tools and languages I work with in school and in my projects.</p>
        <div className="skills">
          {skillGroups.map((g) => {
            const Icon = icons[g.icon]
            return (
              <article key={g.title} className={`card skill skill--${g.color}`}>
                <span className="skill__icon"><Icon size={26} /></span>
                <h3>{g.title}</h3>
                <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
