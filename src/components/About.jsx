import { Heart } from 'lucide-react'
import { profile } from '../data/portfolio'
import Flower from './Flower'

export default function About() {
  return (
    <section id="about" className="section section--blush">
      <div className="container about">
        <div className="about__photos">
          <img className="about__img about__img--formal" src={profile.photoFormal} alt="Casey in a formal photo" />
          <img className="about__img about__img--book" src={profile.photoBookstore} alt="Casey standing in front of a bookstore shelf" />
          <Flower className="about__flower" size={90} petal="#FFF9DF" center="#F4A6A8" />
        </div>
        <div className="about__text">
          <h2 className="section__title">About Me</h2>
          {profile.bio.map((p) => <p key={p}>{p}</p>)}
          <div className="about__chips">
            {profile.traits.map((t) => <span key={t} className="chip chip--cream">{t}</span>)}
          </div>
          <h3 className="about__sub"><Heart size={18} /> I love</h3>
          <div className="about__chips">
            {profile.interests.map((t) => <span key={t} className="chip chip--mint">{t}</span>)}
          </div>
          <p className="about__goal"><strong>Career goal:</strong> {profile.goal}</p>
        </div>
      </div>
    </section>
  )
}
