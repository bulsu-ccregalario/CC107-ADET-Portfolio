import { GraduationCap } from 'lucide-react'
import { education as e } from '../data/portfolio'
import Flower from './Flower'

export default function Education() {
  return (
    <section id="education" className="section section--mint">
      <div className="container">
        <h2 className="section__title">Education</h2>
        <div className="card edu">
          <Flower className="edu__flower" size={110} petal="#F6D4D5" center="#FBE8A6" />
          <span className="skill__icon"><GraduationCap size={28} /></span>
          <h3>{e.university}</h3>
          <p className="edu__degree">{e.degree}</p>
          <dl className="edu__grid">
            <div><dt>Specialization</dt><dd>{e.specialization}</dd></div>
            <div><dt>Current year</dt><dd>{e.year}</dd></div>
            <div><dt>Expected graduation</dt><dd>{e.graduation}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}
