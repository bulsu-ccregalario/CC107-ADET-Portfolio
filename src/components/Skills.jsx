import { Code2, Database, Smartphone, Palette } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import Flower from './Flower'
import Reveal from './Reveal'

const icons = { code: Code2, database: Database, phone: Smartphone, palette: Palette }

export default function Skills() {
  return (
    <section id="skills" className="section section--mint">
      <Flower className="section__flower section__flower--skills" size={64} petal="#F6D4D5" center="#FBE8A6" variant="b" duration={8} delay={-2} amp={8} />
      <Flower className="section__flower section__flower--bl" size={46} variant="c" petal="#FFF9DF" center="#F4A6A8" duration={7.5} delay={-4} amp={8} />
      <div className="container">
        <Reveal><h2 className="section__title">Technical Skills</h2></Reveal>
        <Reveal delay={80}><p className="section__lead">The tools and languages I work with in school and in my projects.</p></Reveal>
        <div className="skills">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon]
            return (
              <Reveal key={g.title} className="reveal--fill" delay={i * 90}>
                <article className={`card skill skill--${g.color}`}>
                  <span className="skill__icon"><Icon size={26} /></span>
                  <h3>{g.title}</h3>
                  <ul>{g.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
