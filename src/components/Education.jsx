import { GraduationCap } from 'lucide-react'
import { education as e } from '../data/portfolio'
import Flower from './Flower'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="section section--mint">
      <Flower className="section__flower section__flower--tr" size={50} variant="c" petal="#FFF9DF" center="#F4A6A8" duration={8} delay={-2} amp={8} />
      <Flower className="section__flower section__flower--br" size={56} variant="b" petal="#F6D4D5" center="#FFF9DF" duration={9.5} delay={-6} amp={9} />
      <div className="container">
        <Reveal><h2 className="section__title">Education</h2></Reveal>
        <Reveal delay={100} className="edu-wrap">
          <div className="card edu">
            <Flower className="edu__flower" size={110} petal="#F6D4D5" center="#FBE8A6" duration={11} delay={-5} amp={6} />
            <span className="skill__icon"><GraduationCap size={28} /></span>
            <h3>{e.university}</h3>
            <p className="edu__degree">{e.degree}</p>
            <dl className="edu__grid">
              <div><dt>Specialization</dt><dd>{e.specialization}</dd></div>
              <div><dt>Current year</dt><dd>{e.year}</dd></div>
              <div><dt>Expected graduation</dt><dd>{e.graduation}</dd></div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
